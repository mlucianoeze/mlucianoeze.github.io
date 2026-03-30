document.addEventListener('DOMContentLoaded', function() {
    const clickMsg = document.getElementById('clickMsg');
    const img = document.querySelector('#imgContainer img');
    let clickCount = 0;

    const gone = document.getElementById('gone');
    const ominous = document.getElementById('ominous');

    let dialogEnabled = true;
    const dialogBox = document.getElementById('dialog');
    const dialogopts = document.querySelectorAll('#dialog .option');
    dialogopts.forEach(option => {
        const text = option.querySelector('p');
        text.addEventListener('mouseover', function() {
            updateSelected(option);
        });
    });

    const proceed = document.getElementById('proceed');
    const doNot = document.getElementById('do-not');

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            updateSelected(proceed);
        }
        if (event.key === 'ArrowRight') {
            updateSelected(doNot);
        }
        if (event.key === 'Enter' || event.key === 'z') {
            const selected = document.querySelector('.dialogbox .selected');
            if (selected) {
                selected.click();
            }
        }
    });

    proceed.addEventListener('click', function() {
        updateSelected(proceed);
        clicked();
    });

    const placeholder = document.querySelector('.dialogbox .placeholder');
    doNot.addEventListener('click', function() {
        updateSelected(doNot);
        if (!dialogEnabled) {
            return;
        }
        if (clickCount >= 10) {
            img.classList.remove('visible');
            gone.currentTime = 0;
            gone.play();
        }
        clickCount = 0;
        clickMsg.style = 'visibility: hidden;';
        dialogBox.style = 'visibility: hidden;';
        updateSelected(null);
        dialogEnabled = false;
        window.setTimeout(() => {
            dialogEnabled = true;
            dialogBox.style = 'visibility: visible;';
            updateSelected(placeholder);
        }, 500);
    });

    function clicked() {
        if (!dialogEnabled) {
            return;
        }
        clickCount++;
        clickMsg.style = '';
        clickMsg.textContent = `${clickCount}.`;
        if (clickCount >= 10) {
            img.classList.add('visible');
        }
        if (clickCount === 10) {
            ominous.currentTime = 0;
            ominous.play();
        }
    }

    function updateSelected(option) {
        if (!dialogEnabled) {
            return;
        }
        const dialogopts = document.querySelectorAll('.dialogbox > *');
        dialogopts.forEach(option => {
            option.classList.remove('selected');
        });
        if (option) {
            option.classList.add('selected');
        }
    }
});
