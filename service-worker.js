self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('ov-v1').then(function (c) {
      return c.addAll([
        './',
        'index.html',
        'app.js',
        'оболочка.css',
        'calc.css',
        'prices_local.js',
        'boilers_local.js',
        'manifest.webmanifest',
        'icon-512.png',
        'icon-192.png',
        'icon-180.png',
        'icon-64.png'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== 'ov-v1'; }).map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).then(function (resp) {
        if (resp && resp.status === 200 && (resp.type === 'basic' || resp.type === 'cors')) {
          const copy = resp.clone();
          caches.open('ov-v1').then(function (c) { c.put(e.request, copy); });
        }
        return resp;
      }).catch(function () {
        const url = new URL(e.request.url);
        if (e.request.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 408, statusText: 'Offline' });
      });
    })
  );
});