// Define the name of the cache and the list of assets to be cached.
const staticCacheName = "site-static";
const assets = [
  "/offline",
  "/public/styles/style.min.css",
  "./images/Middel-1.webp",
  "/images/facebook-logo.webp",
  "/images/twitter-logo.webp",
  "/images/insta-logo.webp"
];

// Install event listener that adds static assets to cache.
self.addEventListener("install", (event) => {

  // The promise that skipWaiting() returns can be safely ignored.
  // It forces the service worker to become the active worker.
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log("Caching shell assets.");
      cache.addAll(assets);
    })
  );
});

// Activate event listener that removes old caches.
self.addEventListener("activate", (event) => {
  // Perform any other actions required for activation here.
});

// Fetch event listener that responds with cached assets if available, and fetches them otherwise.
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      if (cacheRes) {
        // If the asset is already cached, return it from the cache.
        return cacheRes;
      } else {
        // Otherwise, fetch the asset from the server.
        return fetch(event.request).catch(() => {
          // If the fetch fails, return the offline page from the cache.
          return caches.match("/offline");
        });
      }
    })
  );
});
