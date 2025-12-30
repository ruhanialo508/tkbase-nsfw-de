import { fetchVideos } from './api.js';
import { createOverlay } from './ui.js';

const feed = document.getElementById('feed');
let page = 1;
let loading = false;

async function loadMore() {
    if (loading) return;
    loading = true;

    const videos = await fetchVideos(page);
    page++;

    videos.forEach(vid => {
        if (!vid.urls || !vid.urls.hd) return; // Skip if no HD mp4

        const container = document.createElement('div');
        container.className = 'video-container';

        const video = document.createElement('video');
        video.src = vid.urls.hd; // Direct MP4, smooth no block
        video.loop = true;
        video.muted = true; // Start muted for auto if possible
        video.playsinline = true;
        video.autoplay = false; // Manual for NSFW
        video.controls = false;

        // Click container to play/unmute
        container.addEventListener('click', () => {
            video.muted = false;
            video.play();
        }, { once: true });

        const overlay = createOverlay(video);
        container.appendChild(video);
        container.appendChild(overlay);
        feed.appendChild(container);
    });

    loading = false;
}

loadMore(); // Pehli load karo gunaah

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadMore();
    }
});
