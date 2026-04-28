const CACHE_NAME = 'speedtest-v1';
const ASSETS = [
  './',
  './index.html' // 假設你的 HTML 檔名是 index.html
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});