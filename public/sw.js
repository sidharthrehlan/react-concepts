/**
 * Service worker lifecycle methods
 */
let cacheVersion = "v1";
/**
 * Events on installing service worker
 * - Add url to cache
 */
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheVersion).then((cache) => {
      return cache.addAll([
        "/static/js/bundle.js",
        "/favicon.ico",
        "/static/js/main.chunk.js",
        "/static/js/vendors~main.chunk.js",
        "/users",
        "/",
        "/about",
      ]);
    })
  );
});

/**
 * Load cache urls on fetch event
 */
this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
