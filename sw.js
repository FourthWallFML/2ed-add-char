const CACHE_NAME = 'add-2e-chronicle-v5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './banner.jpg',
  './frame-bg.jpg',
  './parchment-card.jpg',
  './leather-tex.jpg',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
