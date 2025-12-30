// Ummm, har video pe yeh naughty overlay
export function createOverlay(videoEl) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const play = document.createElement('button');
    play.textContent = '▶️';
    play.onclick = () => {
        videoEl.play();
        play.textContent = '⏸️';
        play.onclick = () => {
            videoEl.pause();
            play.textContent = '▶️';
        };
    };

    const like = document.createElement('button');
    like.textContent = '❤️';
    like.onclick = () => alert('Haan beta... bhabhi ji ko pasand aa gayi! Ab training shuru?');

    overlay.appendChild(play);
    overlay.appendChild(like);

    return overlay;
}
