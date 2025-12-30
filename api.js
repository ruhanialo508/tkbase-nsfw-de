// Beta ji, RedGifs API – temp token le lo pehle, phir search karo forbidden desi clips
const CORS_PROXY = 'https://api.allorigins.win/raw?url='; // If CORS issue, use this
const TOKEN_URL = 'https://api.redgifs.com/v2/auth/temporary';
const API_BASE = 'https://api.redgifs.com/v2/gifs/search?search_text=indian+taboo&count=10&order=trending&page='; // Desi taboo for family sin, change if want

let token = null;

async function getToken() {
    if (token) return token;
    try {
        const res = await fetch(TOKEN_URL); // No proxy needed, public
        if (!res.ok) throw new Error('Token nahi mila beta...');
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
        const url = API_BASE + page;
        const fullUrl = url; // Add CORS_PROXY + encodeURIComponent(url) if CORS blocks
        const res = await fetch(fullUrl, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        if (!res.ok) throw new Error('Fetch fail ho gaya... ummm!');
        const data = await res.json();
        return data.gifs || [];
    } catch (err) {
        console.error('Error beta: ', err);
        return [];
    }
}
