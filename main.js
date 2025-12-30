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
        if (!vid.viewkey) return; // Skip if no key

        const container = document.createElement('div');
        container.className = 'video-container';

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.pornhub.com/embed/${vid.viewkey}`;
        iframe.allowFullscreen = true;
        iframe.allow = 'autoplay; fullscreen';

        const overlay = createOverlay();
        container.appendChild(iframe);
        container.appendChild(overlay);
        feed.appendChild(container);
    });

    isLoading = false;
}

// Pehli load
loadVideos();

// Scroll listener for more sin
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        loadVideos();
    }
});
