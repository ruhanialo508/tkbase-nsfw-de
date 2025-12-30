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
        if (!vid.id) return;

        const container = document.createElement('div');
        container.className = 'video-container';

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.eporner.com/embed/${vid.id}`;
        iframe.allowFullscreen = true;
        iframe.allow = 'autoplay; fullscreen';

        container.addEventListener('click', () => iframe.contentWindow.postMessage({action: 'play'}, '*'), {once: true});

        const overlay = createOverlay();
        container.appendChild(iframe);
        container.appendChild(overlay);
        feed.appendChild(container);
    });

    loading = false;
}

loadMore(); // First batch

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadMore();
    }
});
