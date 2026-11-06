/* Minimal service worker so the app can be installed on the home screen. Network first, no offline data. */
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){});
