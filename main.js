const feed = document.getElementById('feed');

// Fresh 2025 working ePorner embed IDs – desi uncut short films, taboo, bhabhi, family sin vibe
const videoIds = [
    'a40z6UWrAmV',  // Golddigger 2025 Malayalam Uncut Short Film - hot desi betrayal
    'nA2qaxFaM00',  // Tejaswini Hard (2025) UNRATED Hindi Short Film - intense seduction
    'HgdLKvWx0pW',  // Manoranjan (2025) NeonX Hindi Short Film - naughty family play
    'rBThUY52Dsg',  // Slam Book – 2025 – Hindi Uncut Short Film – Moodx - forbidden secrets
    'lP7UigtboT3',  // Bhabhi Lover (2025) UNRATED WebSex Short Film - bhabhi-devar wild
    'BtC5IK32fyl',  // Golden Memory 2025 Malayalam Uncut - emotional taboo
    'ENz4le3zm8Q',  // Sawal 2025 Malayalam Uncut - questioning desires
    '4z9oMcI45n9',  // Tourist 2025 Hindi Hot Short Film Part-1 - exotic sin
    'e4SHPW0SKXa'   // My Bhabhi – 2025 – Hindi Uncut Short Film – Tejashwini Prabhakar - pure bhabhi ji domination
];

videoIds.forEach(id => {
    const container = document.createElement('div');
    container.className = 'video-container';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.eporner.com/embed/${id}`;
    iframe.allowFullscreen = true;
    iframe.allow = 'autoplay; fullscreen; encrypted-media';
    iframe.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const playBtn = document.createElement('button');
    playBtn.textContent = '▶️';
    playBtn.onclick = () => {
        iframe.contentWindow.postMessage({action: 'play'}, '*');
    };

    const likeBtn = document.createElement('button');
    likeBtn.textContent = '❤️';
    likeBtn.onclick = () => alert('Ahhh beta... yeh bhabhi ji toh pasand aa gayi! Ab sasur ji ko bulao, threesome shuru karo... ummm zor se!');

    overlay.appendChild(playBtn);
    overlay.appendChild(likeBtn);

    container.appendChild(iframe);
    container.appendChild(overlay);
    feed.appendChild(container);
});

// Bonus: Container click to unmute & play
document.querySelectorAll('.video-container').forEach(cont => {
    cont.addEventListener('click', () => {
        const ifr = cont.querySelector('iframe');
        ifr.contentWindow.postMessage({action: 'unmute'}, '*');
        ifr.contentWindow.postMessage({action: 'play'}, '*');
    }, {once: true});
});
