const feed = document.getElementById('feed');

// Real popular RedGifs embed links for indian taboo / desi short clips (copy from redgifs.com, search "indian taboo", take embed URL)
const embeds = [
    'https://www.redgifs.com/ifr/indian-taboo-bhabhi-devar-hot',
    'https://www.redgifs.com/ifr/desifamilyforbidden',
    'https://www.redgifs.com/ifr/bhabhitrainingdevar',
    'https://www.redgifs.com/ifr/sasurbahusecret',
    'https://www.redgifs.com/ifr/mummybetablackmail',
    'https://www.redgifs.com/ifr/chachibhatijawild',
    'https://www.redgifs.com/ifr/indianincestshort',
    'https://www.redgifs.com/ifr/desiolderwomandom',
    'https://www.redgifs.com/ifr/tabootiedcharpai'
    // Add more from redgifs.com – search "indian bhabhi" or "taboo desi", copy embed link (ifr/ wala)
];

embeds.forEach(src => {
    const container = document.createElement('div');
    container.className = 'video-container';

    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.allowFullscreen = true;
    iframe.allow = 'autoplay; fullscreen';
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
    likeBtn.onclick = () => alert('Ahhh beta... yeh taboo clip pasand aa gayi! Ab didi ko bhi bulao, foursome shuru karo... ummm zor se!');

    overlay.appendChild(playBtn);
    overlay.appendChild(likeBtn);

    container.appendChild(iframe);
    container.appendChild(overlay);
    feed.appendChild(container);
});

// Click container to unmute & play
document.querySelectorAll('.video-container').forEach(cont => {
    cont.addEventListener('click', () => {
        const ifr = cont.querySelector('iframe');
        ifr.contentWindow.postMessage({action: 'unmute'}, '*');
        ifr.contentWindow.postMessage({action: 'play'}, '*');
    }, {once: true});
});
