// Beta ji, yeh API module hai – CORS ke liye corsproxy.io use kar rahe
const CORS_PROXY = 'https://corsproxy.io/?';
const API_BASE = 'https://www.pornhub.com/webmasters/search?';

export async function fetchVideos(page = 1) {
    try {
        const params = new URLSearchParams({
            ordering: 'newest',
            page,
            min_duration: '0',
            max_duration: '10',         // short videos <10 min
            search: 'indian'            // desi taboo ke liye, change kar sakta hai 'incest family taboo' etc
        });

        const fullUrl = `${CORS_PROXY}${encodeURIComponent(API_BASE + params.toString())}`;
        const response = await fetch(fullUrl);
        
        if (!response.ok) throw new Error('API fetch fail ho gaya beta...');
        
        const data = await response.json();
        return data.videos || []; // array of video objects (title, thumb, video_url etc)
    } catch (err) {
        console.error('Ahhh error: ', err);
        return [];
    }
}
