// MeatQuiz — service worker.
// v96: смена имени кэша форсирует переустановку оболочки на устройствах —
//   лечит рассинхронизацию, когда новый index.html (с режимом Find) уже
//   загружен, а MEAT_QUIZ.js ещё старый из кэша (без body_part) и Find писал
//   «Нет вопросов с отмеченной частью туши». Словарь всё равно тянется
//   stale-while-revalidate, но новый CACHE гарантирует свежую оболочку.
// v95: скорость загрузки фото + свежесть обновлений.
//   index.html: проба существования картинок переведена с Image() (скачивал
//   каждый файл ЦЕЛИКОМ, последовательно — «Загрузка фото…» висела секундами
//   на холодном открытии) на параллельные HEAD-запросы (только заголовки, тела
//   не качаются); при file:// автоматический фолбэк на Image(). Скачивается
//   только показанный кадр, остальные предзагружаются в фоне для свайпа.
//   sw.js: fetch с cache:'no-cache' для HTML и фоновой ревалидации — GitHub
//   Pages ставит max-age=600, и без этого свежая версия приезжала только по
//   Ctrl+F5 (браузер молча отдавал страницу из своего http-кэша до 10 минут).
// v94: ребрендинг CitizenShip → MeatQuiz. Новое имя кэша (старый кэш удалится в
//   activate), из SHELL убраны файлы civics-теста (Write/Read не имеют данных),
//   иконки перерисованы под буквы M Q, манифест/FAQ/логотипы обновлены.
//   Фотографии steak_images/ не прекэшируются (набор произвольный) — их
//   подхватывает stale-while-revalidate после первого показа.
// Стратегии: HTML — network-first; свои статические ресурсы —
//   stale-while-revalidate; чужие домены (Supabase, CDN) — мимо кэша.

const CACHE = 'meatquiz-v101';
// v101: чистка легаси-названий (Citizen/CitizenShip → MeatQuiz в комментариях;
//   идентификаторы и серверные имена civics_* сохранены). Диагностика теперь
//   показывает все режимы (Beef Test/Find, Pork Test/Find) и читает данные
//   напрямую из ключей, не завися от активного набора. FAQ обновлён под два
//   набора мяса и синхронизацию свинины.
// v100: включена облачная синхронизация свинины — но ТОЛЬКО веса (прогресс/seen)
//   в civics_weights под mode 'pork'/'pork_find'. civics_stats свинины НЕ
//   выгружается, поэтому серверный триггер рейтинга (sync_leaderboard читает
//   civics_stats) свинину не видит: прогресс синхронизируется между
//   устройствами, рейтинг не затрагивается, серверную схему менять не нужно.
// v99: свинина стала отдельным вторым рядом (Beef / Pork), у Pork появились свои
//   Test и Find. Find свинины использует свиную схему туши (ctPigSVG) и свои
//   изолированные ключи прогресса (wm2_pork*). Поднятие версии кэша доставляет
//   новую оболочку на устройства.
// v98: добавлен режим Pork (свинина). Новый словарь dictionary/PORK_QUIZ.js в
//   SHELL; он тоже под network-first-веткой для dictionary/*.js. Фото свинины —
//   steak_images/pork/ (не прекэшируются, как и говяжьи). Поднятие версии кэша
//   гарантирует, что оболочка с кнопкой Pork доедет на все устройства.
// v97: раз и навсегда убираем «Файл вопросов устарел». Причина была в том, что
//   словари (dictionary/*.js) отдавались stale-while-revalidate: при онлайне
//   первым показывался СТАРЫЙ файл из кэша (без body_part), свежий подтягивался
//   только к следующему запуску. Теперь для dictionary/*.js стратегия
//   network-first: есть сеть — всегда свежий MEAT_QUIZ.js; кэш только офлайн-
//   резерв. Оболочка (шрифты/иконки) остаётся stale-while-revalidate.
const SHELL = [
  './',
  './index.html',
  './supabase.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './dictionary/MEAT_QUIZ.js',
  './dictionary/PORK_QUIZ.js',
  './fonts/nunito-cyrillic-400-normal.woff2',
  './fonts/nunito-latin-400-normal.woff2',
  './fonts/nunito-cyrillic-600-normal.woff2',
  './fonts/nunito-latin-600-normal.woff2',
  './fonts/nunito-cyrillic-700-normal.woff2',
  './fonts/nunito-latin-700-normal.woff2',
  './fonts/nunito-cyrillic-800-normal.woff2',
  './fonts/nunito-latin-800-normal.woff2',
  './fonts/nunito-cyrillic-900-normal.woff2',
  './fonts/nunito-latin-900-normal.woff2'
];

// Кэшируем оболочку по одному, чтобы отсутствие любого файла (напр. иконки)
// не ломало установку service worker.
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.all(SHELL.map(url => c.add(url).catch(() => {})))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;            // POST/PATCH (запись в Supabase) не трогаем

  const url = new URL(req.url);

  // ── ГЛАВНОЕ ИСПРАВЛЕНИЕ ──────────────────────────────────────────────
  // Любой запрос на ДРУГОЙ домен (Supabase REST/Auth, CDN с библиотекой и
  // шрифтами) уходит напрямую в сеть, минуя кэш воркера. Иначе ответ
  // рейтинга/статистики кэшировался «cache-first» и навсегда залипал на
  // старых данных, хотя на сервере уже свежие. Браузер сам сходит в сеть.
  if (url.origin !== self.location.origin) return;
  // ─────────────────────────────────────────────────────────────────────

  const isHTML = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  // HTML — «сначала сеть» (всегда свежая страница), офлайн — из кэша.
  if (isHTML) {
    e.respondWith(
      // cache:'no-cache' заставляет браузер сверить версию с сервером (ETag/304),
      // а не отдать HTML из своего http-кэша: GitHub Pages ставит max-age=600,
      // и без этого свежая страница приезжала только по Ctrl+F5.
      fetch(req, { cache: 'no-cache' }).then(res => {
        if (res && res.ok) {                       // не кэшируем ошибочные ответы (404/500) как оболочку
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  // Словари вопросов (dictionary/*.js) — «сначала сеть». Это критично: данные
  // вопросов не должны залипать. При онлайне ВСЕГДА берём свежий файл (с
  // no-cache, чтобы обойти и http-кэш браузера), кэш — только офлайн-резерв.
  // Именно это окончательно лечит «Файл вопросов устарел»: пользователь больше
  // никогда не видит старый MEAT_QUIZ.js без body_part, пока есть сеть.
  if (/\/dictionary\/.*\.js(\?|$)/.test(url.pathname)) {
    e.respondWith(
      fetch(req, { cache: 'no-cache' }).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match(req).then(hit =>
        hit || new Response('', { status: 504, statusText: 'Offline' })
      ))
    );
    return;
  }

  // Остальные свои статические ресурсы (./fonts/*, иконки) —
  // «stale-while-revalidate»: мгновенно отдаём из кэша, а в фоне тянем
  // свежую версию в кэш. Так обновлённые наборы подхватываются при
  // следующем открытии без ручного поднятия версии кэша.
  e.respondWith(
    caches.match(req).then(hit => {
      // фоновая ревалидация тоже с no-cache: иначе «свежая» версия бралась бы
      // из http-кэша браузера (max-age=600 на GitHub Pages) и обновления
      // словаря/шрифтов задерживались на 10 минут
      const network = fetch(req, { cache: 'no-cache' }).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() =>
        // Офлайн и ресурса нет в кэше. ВАЖНО: нельзя отдавать index.html на
        // НЕ-HTML запрос (.js/шрифт/иконка) — иначе HTML попадёт в контекст
        // <script>/шрифта и сломает разбор. Навигации обрабатываются выше,
        // здесь только под-ресурсы → отдаём честный 504.
        hit || new Response('', { status: 504, statusText: 'Offline' })
      );
      return hit || network;
    })
  );
});
