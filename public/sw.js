const CACHE_NAME = 'winwin-images-v1'
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico']

// Check if request is for an image
function isImageRequest(url) {
  const pathname = url.pathname.toLowerCase()
  return IMAGE_EXTENSIONS.some((ext) => pathname.endsWith(ext))
}

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
          .filter((name) => name.startsWith('winwin-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    }).then(() => self.clients.claim())
  )
})

// Fetch event - cache-first strategy for all images
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)

  // Only cache GET requests for images
  if (event.request.method !== 'GET' || !isImageRequest(url)) {
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
