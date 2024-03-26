var cacheName = 'Code?Here+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        'AppIcon/android/android-launchericon-512-512.png',
        'AppIcon/android/android-launchericon-192-192.png',
        'AppIcon/android/android-launchericon-144-144.png',
        'AppIcon/android/android-launchericon-96-96.png',
        'AppIcon/android/android-launchericon-72-72.png',
        'AppIcon/android/android-launchericon-48-48.png',

        'AppIcon/ios/1024.png',
        'AppIcon/ios/512.png',
        'AppIcon/ios/256.png',
        'AppIcon/ios/192.png',
        'AppIcon/ios/180.png',
        'AppIcon/ios/167.png',
        'AppIcon/ios/152.png',
        'AppIcon/ios/144.png',
        'AppIcon/ios/100.png',
        'AppIcon/ios/87.png',
        'AppIcon/ios/80.png',
        'AppIcon/ios/76.png',
        'AppIcon/ios/72.png',
        'AppIcon/ios/64.png',
        'AppIcon/ios/60.png',
        'AppIcon/ios/58.png',
        'AppIcon/ios/57.png',
        'AppIcon/ios/50.png',
        'AppIcon/ios/40.png',
        'AppIcon/ios/32.png',
        'AppIcon/ios/29.png',
        'AppIcon/ios/20.png',
        'AppIcon/ios/16.png',
       
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