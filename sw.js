// MeatQuiz — service worker.
// v94: ребрендинг CitizenShip → MeatQuiz. Новое имя кэша (старый кэш удалится в
//   activate), из SHELL убраны файлы civics-теста (Write/Read не имеют данных),
//   иконки перерисованы под буквы M Q, манифест/FAQ/логотипы обновлены.
//   Фотографии steak_images/ не прекэшируются (набор произвольный) — их
//   подхватывает stale-while-revalidate после первого показа.
// Стратегии: HTML — network-first; свои статические ресурсы —
//   stale-while-revalidate; чужие домены (Supabase, CDN) — мимо кэша.

const CACHE = 'meatquiz-v94';
const SHELL = [
  './',
  './index.html',
  './supabase.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './dictionary/MEAT_QUIZ.js',
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
      fetch(req).then(res => {
        if (res && res.ok) {                       // не кэшируем ошибочные ответы (404/500) как оболочку
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  // Свои статические ресурсы (dictionary/*.js, ./fonts/*, иконки) —
  // «stale-while-revalidate»: мгновенно отдаём из кэша, а в фоне тянем
  // свежую версию в кэш. Так обновлённые наборы подхватываются при
  // следующем открытии без ручного поднятия версии кэша.
  e.respondWith(
    caches.match(req).then(hit => {
      const network = fetch(req).then(res => {
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
