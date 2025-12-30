const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const API_URL = 'https://www.eporner.com/api/v2/video/search/?query=indian&per_page=10&page='; // Change query=taboo or family for more sin

export async function fetchVideos(page = 1) {
    try {
        const fullUrl = `${CORS_PROXY}${encodeURIComponent(API_URL + page)}`;
        const res = await fetch(fullUrl);
        if (!res.ok) throw new Error('ePorner fetch fail... ahhh!');
        const data = await res.json();
        return data.videos || [];
    } catch (e) {
        console.error('Error beta: ', e);
        return [];
    }
}
