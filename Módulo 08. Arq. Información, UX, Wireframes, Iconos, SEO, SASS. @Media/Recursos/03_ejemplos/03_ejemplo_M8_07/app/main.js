let getAway = document.querySelector('a.get_away');
let modal = document.querySelector('.modal');
let modalOut = document.querySelector('a.modal_out');

getAway.addEventListener('click', ev => {
    ev.preventDefault();
    modal.classList.add('opened');
});

modalOut.addEventListener('click', ev => {
    ev.preventDefault();
    modal.classList.remove('opened');
});