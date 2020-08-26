self.addEventListener("install", function(event){
    console.log("[Service Worker:] Installing Service Workers ", event)
});
self.addEventListener("activated", function(event){
    console.log("[Service Worker:] Activating Service Workers ", event);
    return self.clients.claim();
});

self.addEventListener("fetch", function(event){
    console.log("[Service Worker:] Fetching...", event)
    event.respondWith(fetch(event.request));
});

