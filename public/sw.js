const CACHE_NAME = 'winwin-assets-v1'
const ASSET_PATH = '/assets/'

// Install event - cache opens
self.addEventListener('install', (event) => {
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('winwin-assets-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    }).then(() => self.clients.claim())
  )
})

// Fetch event - cache-first strategy for assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)

  // Only cache GET requests for /assets/*
  if (event.request.method !== 'GET' || !url.pathname.startsWith(ASSET_PATH)) {
    return
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }

        return fetch(event.request).then((networkResponse) => {
          // Only cache successful responses
          if (networkResponse.ok) {
            cache.put(event.request, networkResponse.clone())
          }
          return networkResponse
        })
      })
    })
  )
})
