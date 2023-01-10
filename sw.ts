/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;
export {};

const CACHE_NAME = `static-cache-0.0.1`;
const filesToCache = ["/"];

/**
 * Cache files on install
 */
self.addEventListener("install", event => {
  event.waitUntil(
    (async function() {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(filesToCache);
    })()
  );
});

/**
 * Delete outdated caches when activated
 */
self.addEventListener("activate", event => {
  self.clients.claim();

  console.log("Registered worker")

  event.waitUntil(
    (async function() {
      // Remove old caches.
      const promises = (await caches.keys()).map(cacheName => {
        if (CACHE_NAME !== cacheName) {
          return caches.delete(cacheName);
        }
      });

      await Promise.all<any>(promises);
    })()
  );
});

/**
 * Reply with cached data when possible
 */
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") {
    return;
  }
  event.respondWith(
    (async function() {
      const cachedResponse = await caches.match(event.request, {
        ignoreSearch: true
      });
      return cachedResponse || fetch(event.request);
    })()
  );
});