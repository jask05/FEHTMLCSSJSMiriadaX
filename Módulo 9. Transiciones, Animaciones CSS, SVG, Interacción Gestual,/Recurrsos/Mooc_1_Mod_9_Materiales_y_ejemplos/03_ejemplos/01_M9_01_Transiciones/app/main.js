let form = document.querySelector('form');
let overlaySpinner = document.querySelector('.overlay_spinner');
let overlay = document.querySelector('.overlay');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    overlaySpinner.classList.add('opened');

    window.setTimeout(() => {
        overlaySpinner.classList.remove('opened');

        window.setTimeout(() => {
            overlay.classList.add('opened');
        }, 500);
    }, 1000);
});
