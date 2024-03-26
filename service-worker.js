var cacheName = 'Code?Here+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        'AppIcon/29.png',
        'AppIcon/40.png',
        'AppIcon/57.png',
        'AppIcon/58.png',
        'AppIcon/60.png',
        'AppIcon/80.png',
        'AppIcon/87.png',
        'AppIcon/114.png',
        'AppIcon/120.png',
        'AppIcon/180.png',
        'AppIcon/1024.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});