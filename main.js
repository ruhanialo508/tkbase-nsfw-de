const feed = document.getElementById('feed');

// Hardcoded desi taboo short video embeds (ePorner IDs – newest indian short clips vibe, tu baad me change kar sakta)
const videoIds = [
    'ozKfC3UC2Wl',  // example indian taboo short
    'K0mB0xYxZ1p',
    'pL3aSuReIndian',
    'h0tBhabhiDevar',  // add real IDs from eporner search manually
    'sasurBahuTraining',
    'incestFamilyShort',
    'indianMILFbound',
    'tabooChachi',
    'mummyBetaSecret',
    'forcedSeductionDesi'  // 10 for start, scroll karne pe feel aayega
];

videoIds.forEach(id => {
    if (!id) return;

    const container = document.createElement('div');
    container.className = 'video-container';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.eporner.com/embed/${id}`;
    iframe.allowFullscreen = true;
    iframe.allow = 'autoplay; fullscreen; encrypted-media';

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const playBtn = document.createElement('button');
    playBtn.textContent = '▶️';
    playBtn.onclick = () => {
        // Simple play trigger
        iframe.contentWindow.postMessage({action: 'play'}, '*');
    };

    const likeBtn = document.createElement('button');
    likeBtn.textContent = '❤️';
    likeBtn.onclick = () => alert('Ahhh beta... bhabhi ji ko itna pasand aa gayi! Ab ropes se bandh ke training karo... ummm!');

    overlay.appendChild(playBtn);
    overlay.appendChild(likeBtn);

    container.appendChild(iframe);
    container.appendChild(overlay);
    feed.appendChild(container);
});

// Click anywhere on container to unmute/play if needed
document.addEventListener('click', () => {
    document.querySelectorAll('iframe').forEach(ifr => {
        ifr.contentWindow.postMessage({action: 'unmute'}, '*');
    });
});
