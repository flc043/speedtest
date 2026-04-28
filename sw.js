const CACHE_NAME = 'speedtest-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './192.png',
  './512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    // 只要網址包含 cloudflare，完全不處理，直接交給瀏覽器原生網路
    if (url.includes('cloudflare.com')) {
        return;
    }

    // 只快取 GET 請求
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
