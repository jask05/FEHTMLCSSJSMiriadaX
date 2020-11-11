const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "assets/img/malo.png",
    OPPONENT_PICTURE_DEAD = "assets/img/malo_muerto.png",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    GAME_OVER_PICTURE = "assets/img/game_over.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "assets/img/bueno.png",
    PLAYER_PICTURE_DEAD = "assets/img/bueno_muerto.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/img/shot1.png",
    SHOT_PICTURE_OPPONENT = "assets/img/shot2.png",
    SHOT_WIDTH = 1.5,

    GAME_UI = {
        gameBoard: document.querySelector('.game')
    };


function getRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

function collision(div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);

}

var game;
function startGame() {
    game = new Game();
    game.start();
}





/**
 * Start Game
 * 
*/
if (document.querySelector('.game')) {
    startGame();
}




/**
 * Navigation in Game
 * 
*/
if (document.querySelector('.game')) {

    document.querySelector('#pause').addEventListener('click', function () {
        game.pauseOrResume();
        document.querySelector('#modal_pause_window').classList.add('active');
    });

    document.querySelector('#confirm_quit').addEventListener('click', function () {
        document.querySelector('#modal_confirm').classList.add('active');
    });

    document.querySelector('#back_to_game').addEventListener('click', function () {
        game.pauseOrResume();
        document.querySelector('#modal_pause_window').classList.remove('active');
    });

    document.querySelector('#back_to_game_02').addEventListener('click', function () {
        game.pauseOrResume();
        document.querySelector('#modal_confirm').classList.remove('active');
        document.querySelector('#modal_pause_window').classList.remove('active');
    });
}




/**
 * Toggles
 * 
*/
let toggles = document.querySelectorAll('.toggle');
toggles.forEach(t => {
    t.addEventListener('click', () => {
        t.classList.toggle('on');
    });
});






/**
 * Navigation
 *
 */

/** 
 * Auto navigation to menu
 */
if (document.querySelector('#splash_page')) {
    window.setTimeout(() => {
        window.location.href = '/menu.html'
    }, 1000);
}


if (document.querySelector('#menu_page')) {
    let links = document.querySelectorAll('#menu_page .foot_navigation a');
    let links_back = document.querySelectorAll('.footer .btn.get_back');
    let windows = document.querySelectorAll('.menus');

    // Go to menu
    links.forEach((link, i, self) => {
        link.addEventListener('click', ev => {
            ev.preventDefault();

            let whatToOpen = link.getAttribute('open-menu');
            let whatToOpen_id = `#${whatToOpen}_page`;

            // close all
            self.forEach(slink => {
                slink.classList.remove('active');
            });

            // open linked element
            document.querySelector(whatToOpen_id).classList.add('active');
        });
    });

    // Get back from menu
    links_back.forEach((link, i, self) => {
        link.addEventListener('click', ev => {
            ev.preventDefault();

            // close all
            windows.forEach(w => {
                w.classList.remove('active');
            });
        });
    });
}












