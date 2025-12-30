// Beta, yeh API module – better proxy for no errors
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const API_BASE = 'https://www.pornhub.com/webmasters/search?';

export async function fetchVideos(page = 1) {
    try {
        const params = new URLSearchParams({
            ordering: 'newest',
            page: page.toString(),
            min_duration: '0',
            max_duration: '10',  // Short clips for quick sin
            search: 'indian taboo'  // Desi family vibes, change if want more dirty
        });

        const fullUrl = `${CORS_PROXY}${encodeURIComponent(API_BASE + params.toString())}`;
        const response = await fetch(fullUrl);
        
        if (!response.ok) throw new Error('Ahhh, fetch nahi hua beta...');
        
        const data = await response.json();
        return data.videos || []; // Videos array with viewkey etc.
    } catch (err) {
        console.error('Ummm error: ', err);
        return [];
    }
}
