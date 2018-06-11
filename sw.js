// var CACHE_NAME = 'cache-v1';
// var urlsToCache = [
// 	'/offline.html',
// 	'/styles/main.css'
// ];

// self.addEventListener('install', function(event) {
// 	// Perform install steps
// 	event.waitUntil(
// 		caches.open(CACHE_NAME).then(function(cache) {
// 			console.log('Opened cache');
// 			return cache.addAll(urlsToCache);
// 		})
// 	);
// });

// self.addEventListener('fetch', function(event) {
// 	event.respondWith(
// 		// Try the cache first then network
// 		caches.match(event.request).then(function(response) {
// 			return response || fetch(event.request);
// 		}).catch(function() {
// 			// If both fail (e.g. no network), show a generic fallback:
// 			return caches.match('/offline.html');
// 		})
// 	);
// });

const version = "0.6.11";
const cacheName = `airhorner-${version}`;
self.addEventListener('install', e => {
	const timeStamp = Date.now();
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				'/',
				'/views/home/index.html',
				'/views/home/offline.html',
				'/styles/main.css',
				'/scripts/main.min.js',
				'/scripts/comlink.global.js',
				'/scripts/messagechanneladapter.global.js',
				'/scripts/pwacompat.min.js',
				'/sounds/airhorn.mp3'
			]).then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.open(cacheName).then(cache => cache.match(event.request, {ignoreSearch: true})).then(response => {
			return response || fetch(event.request);
		})
	);
});