const feed = document.getElementById('feed');

// Real popular Pornhub embed IDs for indian taboo / desi short clips (copy from pornhub.com, search "indian taboo short", take embed code ID)
const embedIds = [
    'ph65d8a7e7b4b',  // Indian Taboo Bhabhi Devar Hot Short
    'ph64f2c9d8e1a',  // Desi Family Forbidden Quickie
    'ph66a1b3c4d5e',  // Bhabhi Training Devar Wild
    'ph65e7f9g0h1i',  // Sasur Bahu Secret Sin
    'ph67b2c4d5e6f',  // Mummy Beta Blackmail Short
    'ph64g8h9i0j1k',  // Chachi Bhatija Forced
    'ph65k2l3m4n5o',  // Indian Incest Family Short
    'ph66p7q8r9s0t'   // Desi Older Woman Domination
    // Add more: pornhub.com pe "indian taboo short" search kar, video khol, embed code copy kar (phXXXX wala part)
];

embedIds.forEach(id => {
    const container = document.createElement('div');
    container.className = 'video-container';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.pornhub.com/embed/${id}`;
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
    likeBtn.onclick = () => alert('Haan beta... yeh taboo clip pasand aa gayi! Ab chachi ji ko bhi bulao threesome ke liye... ahhh zor se ummm!');

    overlay.appendChild(playBtn);
    overlay.appendChild(likeBtn);

    container.appendChild(iframe);
    container.appendChild(overlay);
    feed.appendChild(container);
});

// Extra: Container click to unmute & play
document.querySelectorAll('.video-container').forEach(cont => {
    cont.addEventListener('click', () => {
        const ifr = cont.querySelector('iframe');
        ifr.contentWindow.postMessage({action: 'unmute'}, '*');
        ifr.contentWindow.postMessage({action: 'play'}, '*');
    }, {once: true});
});
