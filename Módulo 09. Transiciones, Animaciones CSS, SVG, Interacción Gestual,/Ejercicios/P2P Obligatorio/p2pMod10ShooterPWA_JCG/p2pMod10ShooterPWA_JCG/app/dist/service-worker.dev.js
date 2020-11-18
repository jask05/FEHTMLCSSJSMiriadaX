"use strict";

//'use strict';
// CODELAB: Update cache names any time any of the cached files change.
var CACHE_NAME = 'static-cache-v4'; // CODELAB: Add list of files to cache here.

var FILES_TO_CACHE = ['/offline.html', '/index.html', '/assets/img/bueno_muerto.png', '/assets/img/bueno192.png', '/assets/img/bueno512.png', '/assets/img/Cabecera.png', '/assets/img/game_over.png', '/assets/img/jefe.png', '/assets/img/jefe_muerto.png', '/assets/img/LOGO.png', '/assets/img/malo_muerto.png', '/assets/img/shoot1.png', '/assets/img/shoot2.png', '/app/libs/anime.min.js', '/app/libs/swiper.min.js', '/app/libs/swiper.css', '/app/Animations.js', '/app/main.js', '/app/Navigation.js', '/app/install.js', '/assets/fonts/nunito/Nunito-Bold.woff2', '/assets/fonts/nunito/Nunito-Regular.woff2', '/assets/fonts/material-icons/materialdesignicons-webfont.woff2', '/assets/fonts/nunito/Nunito-Bold.woff', '/assets/fonts/nunito/Nunito-Regular.woff', '/assets/fonts/material-icons/materialdesignicons-webfont.woff', '/assets/fonts/nunito/Nunito-Bold.ttf', '/assets/fonts/nunito/Nunito-Regular.ttf', '/assets/fonts/material-icons/materialdesignicons-webfont.ttf', '/assets/fonts/nunito/Nunito-Bold.eot', '/assets/fonts/nunito/Nunito-Regular.eot', '/assets/fonts/material-icons/materialdesignicons-webfont.eot', '/assets/fonts/nunito/Nunito-Bold.svg', '/assets/fonts/nunito/Nunito-Regular.svg'];
self.addEventListener('install', function (evt) {
  console.log('[ServiceWorker] Install'); // CODELAB: Precache static resources here.

  evt.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    console.log('[ServiceWorker] Pre-caching offline page');
    return cache.addAll(FILES_TO_CACHE);
  }));
  self.skipWaiting();
});
self.addEventListener('activate', function (evt) {
  console.log('[ServiceWorker] Activate'); // CODELAB: Remove previous cached data from disk.

  evt.waitUntil(caches.keys().then(function (keyList) {
    return Promise.all(keyList.map(function (key) {
      if (key !== CACHE_NAME) {
        console.log('[ServiceWorker] Removing old cache', key);
        return caches["delete"](key);
      }
    }));
  }));
  self.clients.claim();
});
self.addEventListener('fetch', function (evt) {
  // CODELAB: Add fetch event handler here.
  // if (evt.request.mode !== 'navigate') {
  //   // Not a page navigation, bail.
  //   console.log("Fetch no navigate");
  //   return;
  // }
  console.log('[ServiceWorker] Fetch', evt.request.url);
  evt.respondWith(caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(evt.request).then(function (response) {
      console.log("RESP", response);
      return response || fetch(evt.request);
    });
  }));
});