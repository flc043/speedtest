const CACHE_NAME = 'speedtest-v5';

self.addEventListener('install', (e) => {
  self.skipWaiting(); // 強制更新
});

self.addEventListener('fetch', (event) => {
  // 如果是測速請求，直接跳過 Service Worker，走原生網路
  if (event.request.url.includes('cloudflare.com')) {
    return; 
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
