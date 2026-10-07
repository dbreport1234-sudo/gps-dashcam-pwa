const CACHE_NAME = 'gps-nav-dashcam-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css',
  'https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((key) => { if (key !== CACHE_NAME) return caches.delete(key); })
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('router.project-osrm.org') || e.request.url.includes('nominatim.openstreetmap.org')) {
    return e.respondWith(fetch(e.request));
  }
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
