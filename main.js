const feed = document.getElementById('feed');
let page = 1;
let loading = false;

async function loadMore() {
    if (loading) return;
    loading = true;

    try {
        // ePorner RSS/JSON for newest, indian search – free, no key, CORS friendly for embed
        const response = await fetch(`https://www.eporner.com/api/v2/video/search/?query=indian+short&per_page=10&page=${page}&thumb=1&format=json`);
        const data = await response.json();
        const videos = data.videos || [];

        videos.forEach(vid => {
            if (!vid.id) return;

            const container = document.createElement('div');
            container.className = 'video-container';

            const iframe = document.createElement('iframe');
            iframe.src = `https://www.eporner.com/embed/${vid.id}`;
            iframe.allowFullscreen = true;
            iframe.allow = 'autoplay; fullscreen; encrypted-media';

            const overlay = document.createElement('div');
            overlay.className = 'overlay';

            const playBtn = document.createElement('button');
            playBtn.textContent = '▶️';
            playBtn.onclick = () => iframe.contentWindow.postMessage({action: 'play'}, '*');

            const likeBtn = document.createElement('button');
            likeBtn.textContent = '❤️';
            likeBtn.onclick = () => alert('Haan beta... bhabhi ji ko pasand aa gayi! Ab training shuru karo... ahhh!');

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

// Pehli load
loadMore();

// Infinite scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadMore();
    }
});
