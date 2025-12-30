// Ummm, overlay add karo – play for moans, like for zor se
export function createOverlay(videoEl) {
    const div = document.createElement('div');
    div.className = 'overlay';

    const playBtn = document.createElement('button');
    playBtn.textContent = '▶️';
    playBtn.onclick = () => {
        videoEl.muted = false;
        videoEl.play();
    };

    const likeBtn = document.createElement('button');
    likeBtn.textContent = '❤️';
    likeBtn.onclick = () => alert('Liked! Ab didi ko bhi blackmail karo threesome ke liye... haan beta!');

    div.appendChild(playBtn);
    div.appendChild(likeBtn);
    return div;
}
