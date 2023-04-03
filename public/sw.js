// variables
const staticCacheName = "site-static"
const assets = [ 
    "/offline",
    "/public/styles/style.min.css",
    "./images/Middel-1.webp",
    "/images/facebook-logo.webp",
    "/images/twitter-logo.webp",
    "/images/insta-logo.webp" 
]

// install service worker
self.addEventListener("install", (event) => {

    // The promise that skipWaiting() returns can be safely ignored.
    // bron: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting 
    self.skipWaiting();
    
    // console.log("Service worker has been installed")
    event.waitUntil(
    caches.open(staticCacheName).then(cache => {
        console.log("catching shell assets");
        cache.addAll(assets);
    })
  )
});
  
// activate service worker
self.addEventListener("activate", (event) => {
    // console.log("Service worker has been activated")

});

self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cacheRes) => {
        if (cacheRes) {
          return cacheRes;
        }
        return fetch(event.request).catch(() => {
          return caches.match("/offline");
        });
      })
    );
  });



//   TO DO
//   Make sure that you at least cache and serve a number of static assets with the Worker. (check)
//   Also provide feedback to the user about the online / offline state. (check)