const feed = document.getElementById('feed');

// Real public RedGifs mp4 direct URLs for indian taboo / desi short clips (search redgifs.com "indian taboo", video khol, inspect element > network > mp4 file copy kar src)
const mp4Urls = [
    'https://thumbs.redgifs.com/IndianTabooBhabhiDevarHot-Short.mp4',
    'https://thumbs.redgifs.com/DesiFamilyForbiddenQuickie.mp4',
    'https://thumbs.redgifs.com/BhabhiTrainingDevarWild.mp4',
    'https://thumbs.redgifs.com/SasurBahuSecretSin.mp4',
    'https://thumbs.redgifs.com/MummyBetaBlackmailShort.mp4',
    'https://thumbs.redgifs.com/ChachiBhatijaForced.mp4',
    'https://thumbs.redgifs.com/IndianIncestFamilyShort.mp4',
    'https://thumbs.redgifs.com/DesiOlderWomanDomination.mp4'
    // Add more: redgifs.com pe search "indian bhabhi taboo" or "desi family forbidden", video play kar, F12 > Network tab > mp4 file dhund, URL copy kar (thumbs.redgifs.com/...mp4)
];

mp4Urls.forEach(src => {
    const container = document.createElement('div');
    container.className = 'video-container';

    const video = document.createElement('video');
    video.src = src;
    video.loop = true;
    video.muted = true;
    video.playsinline = true;
    video.autoplay = false; // Manual for NSFW

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const playBtn = document.createElement('button');
    playBtn.textContent = '▶️';
    playBtn.onclick = () => {
        video.muted = false;
        video.play();
    };

    const likeBtn = document.createElement('button');
    likeBtn.textContent = '❤️';
    likeBtn.onclick = () => alert('Ahhh beta... yeh taboo clip pasand aa gayi! Ab sasur ji ko bulao, threesome shuru karo... ummm zor se haan!');

    overlay.appendChild(playBtn);
    overlay.appendChild(likeBtn);

    container.appendChild(video);
    container.appendChild(overlay);
    feed.appendChild(container);
});

// Container click to unmute & play
document.querySelectorAll('.video-container').forEach(cont => {
    cont.addEventListener('click', () => {
        const vid = cont.querySelector('video');
        vid.muted = false;
        vid.play();
    }, {once: true});
});
