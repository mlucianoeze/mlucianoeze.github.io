document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickBtn');
    const clickMsg = document.getElementById('clickMsg');
    const img = document.querySelector('#imgContainer img');
    let clickCount = 0;

    button.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 1) {
            clickMsg.textContent = 'Hiciste un clic.';
        } else {
            clickMsg.textContent = `Hiciste clic ${clickCount} veces.`;
        }

        if (clickCount >= 10) {
            img.classList.add('visible');
        }
    });
});