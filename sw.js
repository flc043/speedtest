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

self.addEventListener('fetch', (e) => {
  // 關鍵修正：如果是測速請求 (Cloudflare)，直接走網路，不要攔截
  if (e.request.url.includes('cloudflare.com')) {
    return; 
  }

  // 關鍵修正：如果是 POST 請求（上傳測試用），直接走網路
  if (e.request.method === 'POST') {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
