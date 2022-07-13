const cacheName = 'escarapela-argentina-cache-v1'

const urlsToCache = ['/', 'css/styles.css']

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(cacheName).then((cache) => {
			console.log('Opened cache')
			return cache.addAll(urlsToCache)
		})
	)
})

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Cache hit - return response
			if (response) {
				return response
			}
			return fetch(event.request)
		})
	)
})
