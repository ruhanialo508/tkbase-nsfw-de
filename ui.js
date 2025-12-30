// Haan, overlay for like – bhabhi ko heart do
export function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const like = document.createElement('button');
    like.textContent = '❤️';
    like.onclick = () => alert('Liked! Ab sasur ji ko bulao threesome ke liye... ahhh!');

    overlay.appendChild(like);

    return overlay;
}
