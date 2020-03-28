'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/three.jpg": "317a7f30963188b48fec41496cb55d7f",
"/assets/assets/images/two.jpg": "c732592497bb78f16689a848e7b4a57d",
"/assets/assets/images/one.jpg": "cdc68f8a31a1951378d3223eb0a16bee",
"/assets/assets/images/four.jpg": "2ae497ad7b3884634c7a4cd20a196e8b",
"/assets/assets/fonts/Nunito-Regular.ttf": "e9f64790b131c08d6b34a9ecdc453876",
"/assets/assets/fonts/Nunito-Bold.ttf": "a8c930b08cd5fda37ea9f1c105d1ac61",
"/assets/assets/fonts/Nunito-Black.ttf": "900caa7db580afb9489434ed9ce5c978",
"/assets/FontManifest.json": "fd9aa318990c44a2df295e959dd9437f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "a5b5e769be3d051a679bd261a8bbcb6a",
"/assets/LICENSE": "86ed68af45587fbe062baf0749fd1d90",
"/main.dart.js": "b499ceb1320ddf4bf519086db2c178af"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
