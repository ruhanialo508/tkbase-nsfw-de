import { fetchVideos } from './api.js';
import { createOverlay } from './ui.js';

const feed = document.getElementById('feed');
let page = 1;
let isLoading = false;

async function loadVideos() {
    if (isLoading) return;
    isLoading = true;

    const videos = await fetchVideos(page);
    page++;

    videos.forEach(vid => {
        if (!vid.video_url) return; // skip if no direct url

        const container = document.createElement('div');
        container.className = 'video-container';

        const video = document.createElement('video');
        video.src = vid.video_url; // direct mp4 if available, warna embed_url use kar sakte
        video.loop = true;
        video.muted = true; // auto-play ke liye muted start
        video.playsInline = true;
        video.controls = false;

        // Touch/click to unmute & play
        container.addEventListener('click', () => {
            video.muted = false;
            video.play();
        }, { once: true });

        const overlay = createOverlay(video);
        container.appendChild(video);
        container.appendChild(overlay);
        feed.appendChild(container);
    });

    isLoading = false;
}

// First load
loadVideos();

// Infinite scroll – jab bottom pe pahuncho
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        loadVideos();
    }
});
