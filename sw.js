const CACHE_NAME = 'speedtest-v127'; // 更新至 v127

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
    // 【資安防護】絕對不要攔截測速流量，否則會造成卡頓
    if (e.request.url.includes('cloudflare.com')) return; 
    
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
