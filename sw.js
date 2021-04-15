const cacheName = "hello-pwa";
const filesToCache = [
  "./",
  "./index.html",
  "./css/style.css",
  "./css/fonts.css",
  "./js/main.js",
  "./fonts/ClearSans-Regular-webfont.woff",
  "./images/bgtest.jpg",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(cacheName);
        return cache.addAll(filesToCache);
      } catch (e) {
        console.log(e.message);
      }
    })()
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    (async () => {
      try {
        const response = caches.match(e.request);
        return response || fetch(e.request);
      } catch (e) {
        console.log(e.message);
      }
    })()
  );
});
