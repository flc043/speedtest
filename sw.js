const CACHE_NAME = 'speedtest-v128'; // 更新版本號

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './192.png',
  './512.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    })
  );
});

self.addEventListener('fetch', (e) => {
    // 再次確認：絕對不要干擾測速端點
    if (e.request.url.includes('cloudflare.com')) return; 
    
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
