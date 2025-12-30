// Beta ji, CORS bypass ke liye strong proxy – corsproxy.io best 2025 me
const CORS_PROXY = 'https://corsproxy.io/?';

const TOKEN_URL = 'https://api.redgifs.com/v2/auth/temporary';
const API_BASE = 'https://api.redgifs.com/v2/gifs/search?search_text=indian+incest+taboo&count=15&order=new&page='; // More taboo for real ghar ka gunaah

let token = null;

async function getToken() {
    if (token) return token;
    try {
        const proxiedTokenUrl = CORS_PROXY + encodeURIComponent(TOKEN_URL);
        const res = await fetch(proxiedTokenUrl);
        if (!res.ok) throw new Error('Token fetch fail beta... try incognito!');
        const data = await res.json();
        token = data.token;
        return token;
    } catch (err) {
        console.error('Ahhh token error: ', err);
        return null;
    }
}

export async function fetchVideos(page = 1) {
    const authToken = await getToken();
    if (!authToken) return [];

    try {
        const apiUrl = API_BASE + page;
        const proxiedUrl = CORS_PROXY + encodeURIComponent(apiUrl);
        const res = await fetch(proxiedUrl, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        if (!res.ok) throw new Error('Search fail... ummm proxy try kar!');
        const data = await res.json();
        return data.gifs || [];
    } catch (err) {
        console.error('Error beta: ', err);
        return [];
    }
}
