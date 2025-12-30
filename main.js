const feed = document.getElementById('feed');
let page = 1;
let loading = false;
let token = null;

const CORS_PROXY = 'https://api.allorigins.win/raw?url='; // Reliable proxy for CORS, no 403
const TOKEN_URL = 'https://api.redgifs.com/v2/auth/temporary';
const API_BASE = 'https://api.redgifs.com/v2/gifs/search?search_text=indian+taboo&count=10&order=popular&page='; // Generalize: popular top videos, indian taboo for ghar ka gunaah

async function getToken() {
    if (token) return token;
    try {
        const proxiedUrl = CORS_PROXY + encodeURIComponent(TOKEN_URL);
        const res = await fetch(proxiedUrl);
        if (!res.ok) throw new Error('Token nahi mila beta... try incognito!');
        const data = await res.json();
        token = data.token;
        return token;
    } catch (err) {
        console.error('Ahhh token error: ', err);
        return null;
    }
}

async function loadMore() {
    if (loading) return;
    loading = true;

    const authToken = await getToken();
    if (!authToken) {
        console.error('No token, gunaah nahi dikhega beta...');
        loading = false;
        return;
    }

    try {
        const apiUrl = API_BASE + page;
        const proxiedUrl = CORS_PROXY + encodeURIComponent(apiUrl);
        const res = await fetch(proxiedUrl, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        if (!res.ok) throw new Error('Search fail... ummm proxy check kar!');
        const data = await res.json();
        const gifs = data.gifs || [];

        gifs.forEach(gif => {
            if (!gif.urls || !gif.urls.hd) return; // Skip if no HD short video

            const container = document.createElement('div');
            container.className = 'video-container';

            const video = document.createElement('video');
            video.src = gif.urls.hd; // Direct short HD mp4/gifs, popular indian taboo
            video.loop = true;
            video.muted = true;
            video.playsinline = true;
            video.autoplay = false; // Manual for NSFW

            const overlay = document.createElement('div');
            overlay.className = 'overlay';

            const playBtn = document.createElement('button');
            playBtn.textContent = '▶️';
            playBtn.onclick = () => {
                video.muted = false;
                video.play();
            };

            const likeBtn = document.createElement('button');
            likeBtn.textContent = '❤️';
            likeBtn.onclick = () => alert('Haan beta... yeh taboo gif pasand aa gayi! Ab mummy ji ko blackmail karo threesome ke liye... ahhh!');

            overlay.appendChild(playBtn);
            overlay.appendChild(likeBtn);

            container.appendChild(video);
            container.appendChild(overlay);
            feed.appendChild(container);
        });

        page++;
    } catch (err) {
        console.error('Ahhh load fail: ', err);
    }
    loading = false;
}

// Initial load karo family sin
loadMore();

// Infinite scroll for more raaz-e-raat
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadMore();
    }
});
