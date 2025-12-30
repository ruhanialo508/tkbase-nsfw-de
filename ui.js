export function createOverlay() {
    const div = document.createElement('div');
    div.className = 'overlay';
    const likeBtn = document.createElement('button');
    likeBtn.textContent = '❤️';
    likeBtn.onclick = () => alert('Haan beta... bhabhi ji pasand aa gayi! Ab chachi ko bhi dikhao... ummm!');
    div.appendChild(likeBtn);
    return div;
}
