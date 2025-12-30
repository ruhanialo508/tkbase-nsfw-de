const feed = document.getElementById('feed');

// Real 2025 working ePorner embed IDs for desi/indian short taboo vibe clips (short uncut films, indian category)
const videoIds = [
    'nA2qaxFaM00',  // Tejaswini Hard (2025) UNRATED Hindi Short Film - perfect taboo feel
    'HgdLKvWx0pW',  // Manoranjan (2025) NeonX Hindi Short Film - desi seduction
    'rBThUY52Dsg',  // Slam Book – 2025 – Hindi Uncut Short Film – Moodx - family sin vibes
    'lP7UigtboT3',  // Bhabhi Lover (2025) UNRATED WebSex Short Film - bhabhi-devar hot
    'IsabYDAiqXa'   // Bonus young teen indian style short clip (add more if want)
    // Add more from eporner.com search "indian 2025 short" or "taboo indian" for fresh ones
];

videoIds.forEach(id => {
    const container = document.createElement('div');
    container.className = 'video-container';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.eporner.com/embed/${id}`;
    iframe.allowFullscreen = true;
    iframe.allow = 'autoplay; fullscreen; encrypted-media';
    iframe.loading = 'lazy'; // Smooth load

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const playBtn = document.createElement('button');
    playBtn.textContent = '▶️';
    playBtn.onclick = () => {
        iframe.contentWindow.postMessage({action: 'play'}, '*');
        playBtn.textContent = '⏸️'; // Toggle if want
    };

    const likeBtn = document.createElement('button');
    likeBtn.textContent = '❤️';
    likeBtn.onclick = () => alert('Haan beta... is bhabhi ji ko toh pasand aa gaya! Ab chachi ko bhi bulao threesome ke liye... ahhh ummm!');

    overlay.appendChild(playBtn);
    overlay.appendChild(likeBtn);

    container.appendChild(iframe);
    container.appendChild(overlay);
    feed.appendChild(container);
});

// Extra: Click container to unmute & play
document.querySelectorAll('.video-container').forEach(cont => {
    cont.addEventListener('click', () => {
        const ifr = cont.querySelector('iframe');
        ifr.contentWindow.postMessage({action: 'unmute'}, '*');
        ifr.contentWindow.postMessage({action: 'play'}, '*');
    }, {once: true});
});
