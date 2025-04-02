const cacheName = 'cinemaSphere-v1';
const staticAssets = [
    './',
    './index.html',
    './style.css',
    './script.js',
    // Add all your image paths here. For example:
    './images/my-fault-london-2025.jpg',
    './images/fateh-2025.jpg',
    './images/back in ac.jpg',
    './images/inside out.jpg',
    './images/the-electric-state-poster.webp',
    './images/the-gorge.jpeg',
    './images/musafa.jpeg',
    './images/fast-x-vertical-key-art.webp',
    './images/venom 2.webp',
    './images/dog man.jpg',
    './images/pandd.webp',
    './images/F1 MOVIE.jpg',
    './images/bad guys.jpg',
    './images/my spy.jpeg',
    './images/sonic 3.jpg',
    './images/road house.jpg',
    './images/imax1.jpg',
    './images/discount1.jpg',
    './images/icon-192x192.png',
    './images/icon-512x512.png',
    './manifest.json',
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(response => {
        return response || fetch(event.request);
    }));
});