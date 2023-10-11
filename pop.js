// script.js


const giftBox = document.querySelector('.gift-box');
const scratchOverlay = document.getElementById('scratch-overlay');
const appreciation = document.getElementById('appreciation');

let isScratching = false;

function revealAppreciation() {
    appreciation.style.display = 'block';
    scratchOverlay.style.display = 'none';
}

giftBox.addEventListener('click', () => {
    if (!isScratching) {
        isScratching = true;
        scratchOverlay.style.display = 'none';
    }
});

scratchOverlay.addEventListener('mousedown', () => {
    isScratching = true;
});

scratchOverlay.addEventListener('mousemove', (e) => {
    if (isScratching) {
        const rect = scratchOverlay.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            scratchOverlay.style.display = 'none';
            revealAppreciation();
            isScratching = false;
        }
    }
});
