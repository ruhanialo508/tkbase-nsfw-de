const feed = document.getElementById('feed');
let page = 1;
let loading = false;

const CORS_PROXY = 'https://api.allorigins.win/raw?url='; // Working free proxy 2025 me, no 403
const API_BASE = 'https://www.eporner.com/api/v2/video/search/?query=indian+taboo&per_page=10&order=most-popular&format=json&page='; // Popular top videos, indian taboo for ghar ka gunaah

async function loadMore() {
    if (loading) return;
    loading = true;

    try {
        const fullUrl = CORS_PROXY + encodeURIComponent(API_BASE + page);
        const response = await fetch(fullUrl);
        if (!response.ok) throw new Error('Ahhh load fail beta: ' + response.status);
        const data = await response.json();
        const videos = data.videos || [];

        videos.forEach(vid => {
            if (!vid.id || vid.length_sec > 600) return; // Short <10 min filter, gunaah jaldi khatam karo

            const container = document.createElement('div');
            container.className = 'video-container';

            const iframe = document.createElement('iframe');
            iframe.src = `https://www.eporner.com/embed/${vid.id}`;
            iframe.allowFullscreen = true;
            iframe.allow = 'autoplay; fullscreen; encrypted-media';
            iframe.loading = 'lazy';

            const overlay = document.createElement('div');
            overlay.className = 'overlay';

            const playBtn = document.createElement('button');
            playBtn.textContent = '▶️';
            playBtn.onclick = () => iframe.contentWindow.postMessage({action: 'play'}, '*');

            const likeBtn = document.createElement('button');
            likeBtn.textContent = '❤️';
            likeBtn.onclick = () => alert('Haan beta... yeh popular bhabhi ji ko pasand aa gayi! Ab sasur ji ke saath threesome shuru karo... ahhh zor se!');

            overlay.appendChild(playBtn);
            overlay.appendChild(likeBtn);

            container.appendChild(iframe);
            container.appendChild(overlay);
            feed.appendChild(container);
        });

        page++;
    } catch (err) {
        console.error('Ahhh load fail beta: ', err);
    }
    loading = false;
}

// Pehli load karo sin
loadMore();

// Infinite scroll for more family raaz
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadMore();
    }
});
