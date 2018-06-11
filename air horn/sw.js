var CACHE_NAME = 'cache-v1';
var urlsToCache = [
 '/offline.html',
 '/styles/main.css'
];

self.addEventListener('install', function(event) {
 // Perform install steps
 event.waitUntil(
   caches.open(CACHE_NAME).then(function(cache) {
     console.log('Opened cache');
     return cache.addAll(urlsToCache);
   })
 );
});

self.addEventListener('fetch', function(event) {
 event.respondWith(
   // Try the cache first then network
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   }).catch(function() {
     // If both fail (e.g. no network), show a generic fallback:
     return caches.match('/offline.html');
   })
 );
});