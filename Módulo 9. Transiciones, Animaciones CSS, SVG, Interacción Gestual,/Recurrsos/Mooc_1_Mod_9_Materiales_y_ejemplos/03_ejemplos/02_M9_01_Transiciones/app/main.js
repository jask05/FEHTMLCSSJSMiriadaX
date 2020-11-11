const toggle = document.querySelector('.sidebar_toggle');
const menu = document.querySelector('.sidebar');

toggle.addEventListener('click', () => {
    menu.classList.toggle('opened');
});
