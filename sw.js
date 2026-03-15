self.addEventListener('install', event => { 
    console.log('Service Worker installé'); 
});

self.addEventListener('fetch', event => { 
    // ici tu peux gérer le cache si tu veux
});