#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Объединённый скрипт: все 88 видов нарезки/стейков/субпродуктов.

Что делает:
  1. В начале спрашивает, СКОЛЬКО НОВЫХ картинок скачать для каждого ID (1, 3, 10...).
  2. Ищет картинки через DuckDuckGo, фильтр по разрешению (минимум ~HD).
  3. Дедупликация по хэш-сумме: если такая картинка уже есть у этого ID
     в каталоге steak_images (неважно под каким номером) — пропускает её
     и ищет другую.
  4. Нумерация продолжается: если у ID уже есть _001.._003, новые будут _004, _005...
  5. Если одного поискового прохода не хватило (например, нашлось 9 из 10),
     скрипт делает дополнительные проходы с другими формулировками запроса,
     пока не наберёт нужное число новых картинок. Защита от зависания:
     если четыре прохода подряд не дали ни одной новой — ID помечается как
     неполный и скрипт идёт дальше.
  6. Никаких архивов не создаёт: картинки кладутся напрямую в каталог
     steak_images, лежащий РЯДОМ СО СКРИПТОМ (если каталога нет — создастся).
     Прогресс видно прямо в консоли по мере скачивания.

Зависимости (один раз):
    py -m pip install ddgs requests pillow

Запуск:
    py download_steak_images_all.py
"""

import hashlib
import io
import os
import re
import sys
import time

import requests
from PIL import Image
from ddgs import DDGS

# ---------------- настройки ----------------
CUTS = [
    # ---- часть 1 ----
    "New_York_Strip_Roast",
    "Boneless_New_York_Strip_Steak",
    "Steakhouse_Cut_Boneless_New_York_Strip_Steak",
    "Thin-Sliced_Boneless_New_York_Strip_Steak",
    "Porterhouse_Steak",
    "Steakhouse_Cut_Porterhouse_Steak",
    "Thin-Sliced_Porterhouse_Steak",
    "T-Bone_Steak",
    "Steakhouse_Cut_T-Bone_Steak",
    "Thin-Sliced_T-Bone_Steak",
    "Standing_Rib_Roast",
    "Bone-In_Ribeye_Steak",
    "Bone-In_Steakhouse_Cut_Ribeye_Steak",
    "Thin-Sliced_Bone-In_Ribeye_Steak",
    "Beef_Back_Ribs",
    "Boneless_Ribeye_Roast",
    "Boneless_Ribeye_Steak",
    "Steakhouse_Cut_Boneless_Ribeye_Steak",
    "Thin-Sliced_Boneless_Ribeye_Steak",
    "Boneless_Top_Sirloin_Steak",
    "Thin-Sliced_Top_Sirloin_Steak",
    "Sirloin_Cap_Steak",
    "Sirloin_Fillet",
    "Steakhouse_Cut_Sirloin_Fillet",
    "Top_Sirloin_for_Stir_Fry",
    "Sirloin_Cubes_for_Kabobs",
    "Bacon-Wrapped_Sirloin_Fillet",
    "Sirloin_Tri-Tip_Roast",
    # ---- часть 2 ----
    "Sirloin_Tri-Tip_Steak",
    "Tenderloin_Roast_(Chateaubriand)",
    "Tenderloin_Steak_(Filet_Mignon)",
    "Steakhouse_Cut_Tenderloin_Steak_(Filet_Mignon)",
    "Tenderloin_Tips",
    "Bacon-Wrapped_Tenderloin_Steak_(Filet_Mignon)",
    "Bottom_Sirloin_Flap_Steak",
    "Bottom_Sirloin_Flap_Steak_Rolls",
    "Flank_Steak",
    "Inside_Skirt_Steak",
    "Outside_Skirt_Steak",
    "Boneless_Chuck_Roast",
    "Boneless_Chuck_Steak",
    "Boneless_Chuck_Eye_Steak",
    "Thin-Sliced_Boneless_Chuck_Steak",
    "Chuck_Short_Ribs",
    "Boneless_Chuck_Short_Ribs",
    "Flanken_Style_Ribs",
    "Boneless_Flanken_Style_Ribs",
    "Mock_Tender_Roast",
    "Mock_Tender_Steak",
    "Thin-Sliced_Mock_Tender_Steak",
    "Shoulder_Roast",
    "Shoulder_Steak",
    "Thin-Sliced_Shoulder_Steak",
    "Shoulder_Tender",
    "Shoulder_Tender_Medallions",
    "Top_Blade_Roast",
    "Top_Blade_Steak",
    "Thin-Sliced_Top_Blade_Steak",
    "Flat_Iron_Steak",
    "Shoulder_London_Broil",
    "Flat_Cut_Brisket",
    "Beef_for_Stew",
    # ---- часть 3 ----
    "Top_Round_London_Broil",
    "Top_Round_Roast",
    "Top_Round_Steak",
    "Thin-Sliced_Top_Round_Steak",
    "Top_Round_for_Stir_Fry",
    "Bottom_Round_Roast",
    "Rump_Roast",
    "Bottom_Round_Steak",
    "Thin-Sliced_Bottom_Round_Steak",
    "Eye_Round_Roast",
    "Eye_Round_Steak",
    "Thin-Sliced_Eye_Round_Steak",
    "Sirloin_Tip_Roast",
    "Sirloin_Tip_Side_Steak",
    "Sirloin_Tip_Steak",
    "Thin-Sliced_Sirloin_Tip_Side_Steak",
    "Thin-Sliced_Sirloin_Tip_Steak",
    "Round_Chunks",
    "Beef_Cubed_Steak",
    "Beef_Shank",
    "Fresh_Beef_Heart",
    "Fresh_Beef_Kidney",
    "Fresh_Beef_Neckbones",
    "Fresh_Beef_Oxtails",
    "Fresh_Beef_Tongue",
    "Fresh_Honeycomb_Tripe",
]

MIN_W, MIN_H = 1280, 720    # минимум ~HD
MAX_W = 1920                # если картинка шире — уменьшаем (среднее разрешение)
# каталог steak_images всегда рядом со скриптом, независимо от того,
# из какой папки скрипт запущен
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(SCRIPT_DIR, "steak_images")
JPEG_QUALITY = 88
TIMEOUT = 20
PAUSE_BETWEEN_QUERIES = 2.0  # пауза, чтобы поиск не банил за частые запросы

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
}
# -------------------------------------------


def build_query(cut_name: str) -> str:
    q = cut_name.replace("_", " ").replace("(", "").replace(")", "")
    if "beef" not in q.lower():
        q += " beef cut"
    q += " raw meat"
    return q


def query_variants(cut_name: str):
    """Варианты запроса для дополнительных проходов, если новых картинок не хватило."""
    base = cut_name.replace("_", " ").replace("(", "").replace(")", "")
    variants = [
        build_query(cut_name),
        f"{base} beef",
        f"{base} raw",
        f"{base} butcher shop",
        f"{base} meat close up",
        f"{base} uncooked beef photo",
        f"raw {base}",
        f"{base} usda beef cut",
        f"{base} fresh beef",
        f"{base} meat market",
        f"{base} beef photo high resolution",
        f"{base} cut of beef",
    ]
    # убираем дубли, сохраняя порядок
    seen = set()
    result = []
    for v in variants:
        if v not in seen:
            seen.add(v)
            result.append(v)
    return result


def caps_name(cut_name: str) -> str:
    """КАПСЛОКОМ, чистка скобок и лишних символов, без двойных '_'."""
    name = cut_name.upper()
    name = re.sub(r"[^A-Z0-9_\-]", "_", name)
    name = re.sub(r"_+", "_", name)
    return name.strip("_")


def as_int(value) -> int:
    try:
        return int(value)
    except (TypeError, ValueError):
        return 0


def file_md5(path: str) -> str:
    h = hashlib.md5()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def scan_existing(base: str):
    """Смотрит каталог: какие номера уже заняты у этого ID и какие хэши уже есть.

    Возвращает (max_number, set_хэшей).
    """
    pattern = re.compile(rf"^{re.escape(base)}_(\d{{3,}})\.jpg$", re.IGNORECASE)
    max_num = 0
    hashes = set()
    for fname in os.listdir(OUT_DIR):
        m = pattern.match(fname)
        if not m:
            continue
        max_num = max(max_num, int(m.group(1)))
        try:
            hashes.add(file_md5(os.path.join(OUT_DIR, fname)))
        except OSError:
            pass
    return max_num, hashes


def try_download(url: str):
    try:
        r = requests.get(url, headers=HEADERS, timeout=TIMEOUT, stream=True)
        r.raise_for_status()
        data = r.content
        if len(data) < 20_000:
            return None
        img = Image.open(io.BytesIO(data))
        img.load()
        return img
    except Exception:
        return None


def process_image(img: Image.Image):
    """Проверяет разрешение, ужимает, возвращает готовые JPEG-байты или None."""
    w, h = img.size
    if w < MIN_W or h < MIN_H:
        return None
    if img.mode != "RGB":
        img = img.convert("RGB")
    if w > MAX_W:
        new_h = int(h * MAX_W / w)
        img = img.resize((MAX_W, new_h), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, "JPEG", quality=JPEG_QUALITY, optimize=True)
    return buf.getvalue()


def fetch_new_images_for_cut(ddgs: DDGS, cut: str, need: int) -> int:
    """Скачивает `need` НОВЫХ (не дублирующихся по хэшу) картинок для ID.

    Если одного прохода не хватило, делает дополнительные проходы с другими
    поисковыми запросами, пока не наберёт цель. Защита от зависания: если
    четыре прохода подряд не дали ни одной новой картинки — останавливается.
    """
    base = caps_name(cut)
    next_num, known_hashes = scan_existing(base)
    if next_num or known_hashes:
        print(f"  уже есть файлов: до номера {next_num:03d}, хэшей: {len(known_hashes)}")

    saved = 0
    seen_urls = set()          # URL не пробуем дважды между проходами
    empty_passes_in_a_row = 0  # проходы подряд без единой новой картинки
    variants = query_variants(cut)

    for pass_num, query in enumerate(variants, 1):
        if saved >= need:
            break
        if empty_passes_in_a_row >= 4:
            print("  !! четыре прохода подряд без новых картинок — останавливаюсь по этому ID")
            break

        remaining = need - saved
        max_results = min(100, 40 + remaining * 15)
        if pass_num > 1:
            print(f"  ... проход {pass_num}: нужно ещё {remaining}, запрос: \"{query}\"", flush=True)
            time.sleep(PAUSE_BETWEEN_QUERIES)

        try:
            results = list(ddgs.images(query, size="Large", max_results=max_results))
        except Exception as e:
            print(f"  !! ошибка поиска: {e}")
            empty_passes_in_a_row += 1
            continue

        results.sort(
            key=lambda r: (as_int(r.get("width")) >= MIN_W and as_int(r.get("height")) >= MIN_H),
            reverse=True,
        )

        saved_this_pass = 0
        for res in results:
            if saved >= need:
                break
            url = res.get("image")
            if not url or url in seen_urls:
                continue
            seen_urls.add(url)

            img = try_download(url)
            if img is None:
                continue
            jpeg_bytes = process_image(img)
            if jpeg_bytes is None:
                continue

            digest = hashlib.md5(jpeg_bytes).hexdigest()
            if digest in known_hashes:
                print("  ~ дубликат по хэшу, пропускаю")
                continue

            next_num += 1
            filename = f"{base}_{next_num:03d}.jpg"
            with open(os.path.join(OUT_DIR, filename), "wb") as f:
                f.write(jpeg_bytes)
            known_hashes.add(digest)
            saved += 1
            saved_this_pass += 1
            print(f"  + {filename}  ({img.size[0]}x{img.size[1]})", flush=True)

        if saved_this_pass == 0:
            empty_passes_in_a_row += 1
        else:
            empty_passes_in_a_row = 0

    return saved


def ask_count() -> int:
    while True:
        raw = input("Сколько НОВЫХ картинок скачать для каждого ID? (например 1, 3, 10): ").strip()
        try:
            n = int(raw)
            if 1 <= n <= 50:
                return n
            print("Введи число от 1 до 50.")
        except ValueError:
            print("Это не число, попробуй ещё раз.")


def main():
    # чтобы прогресс был виден сразу, а не буферизовался
    try:
        sys.stdout.reconfigure(line_buffering=True)
    except AttributeError:
        pass

    os.makedirs(OUT_DIR, exist_ok=True)
    print(f"Рабочий каталог картинок: {OUT_DIR}")
    existing = len([f for f in os.listdir(OUT_DIR) if f.lower().endswith(".jpg")])
    print(f"Сейчас в каталоге: {existing} jpg-файлов\n")

    need = ask_count()
    print(f"\nОК: качаю по {need} новых картинок для каждого из {len(CUTS)} ID.")
    print("Файлы сохраняются сразу — можешь открыть каталог и смотреть, как они появляются.\n")

    report = []
    with DDGS() as ddgs:
        for i, cut in enumerate(CUTS, 1):
            print(f"[{i}/{len(CUTS)}] {cut}", flush=True)
            n = fetch_new_images_for_cut(ddgs, cut, need)
            report.append((cut, n))
            if n < need:
                print(f"  !! найдено только {n}/{need} новых")
            time.sleep(PAUSE_BETWEEN_QUERIES)

    print("\n===== ИТОГ =====")
    total_new = 0
    for cut, n in report:
        total_new += n
        mark = "OK " if n == need else "!!!"
        print(f"{mark} {caps_name(cut)}: +{n}/{need}")
    total_files = len([f for f in os.listdir(OUT_DIR) if f.lower().endswith(".jpg")])
    print(f"\nНовых скачано: {total_new}")
    print(f"Всего файлов в каталоге: {total_files}")
    print(f"Каталог: {OUT_DIR}")


if __name__ == "__main__":
    main()
