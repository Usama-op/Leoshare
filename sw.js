// LioShare Service Worker — GitHub Pages compatible
const V = 'lio5';
const SHELL_URLS = ['./', './index.html'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(V).then(c => c.addAll(SHELL_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Only handle GET requests for same-origin resources
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) {
    // For CDN resources: network first, no cache fallback (avoid stale scripts)
    e.respondWith(fetch(e.request).catch(() => new Response('', { status: 503 })));
    return;
  }
  // For app shell: stale-while-revalidate
  e.respondWith(
    caches.open(V).then(cache =>
      cache.match(e.request).then(cached => {
        const fresh = fetch(e.request).then(res => {
          if (res.ok) cache.put(e.request, res.clone());
          return res;
        });
        return cached || fresh;
      })
    )
  );
});

// Keep alive ping from clients
self.addEventListener('message', e => {
  if (e.data === 'KEEPALIVE') {
    e.source && e.source.postMessage('ALIVE');
  }
});
