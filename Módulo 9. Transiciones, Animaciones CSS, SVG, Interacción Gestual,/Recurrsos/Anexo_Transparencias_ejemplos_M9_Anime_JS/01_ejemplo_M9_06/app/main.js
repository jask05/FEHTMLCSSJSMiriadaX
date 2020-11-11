
/**
 * Ejemplo 1
 */
// let animatingBlock = document.querySelector('.block');

// anime({
//     // qué elementos animamos?
//     targets: [animatingBlock],

//     // cómo animamos?
//     duration: 1500,
//     delay: 1000,
//     direction: 'alternate',
//     loop: 3,
//     endDelay: 1000,
//     easing: 'easeInOutSine',

//     // qué propiedades?
//     translateX: 500
// });



/**
 * Ejemplo 2
 */
// let animatingBlock = document.querySelector('.block');

// anime({
//     // qué elementos animamos?
//     targets: [animatingBlock],
//     duration: 1500,
//     easing: 'easeInOutSine',

//     // propiedades CSS
//     backgroundColor: '#333',
//     color: '#fff',
//     fontSize: '1.3rem',

//     // transformaciones
//     translateX: '40px',
//     translateY: '50px',
//     rotate: '2turn', // o '45deg',
//     scale: '1.2',

//     // DOM
//     innerHTML: [0, 100],
//     round: 1
// });


/**
 * Ejemplo 3
 */
// let animatingBlock = document.querySelector('.block');

// let animation = anime({
//     targets: [animatingBlock],
//     duration: 1500,
//     delay: 500,
//     easing: 'easeInOutSine',

//     translateX: [100, 500, 200, 0],
//     translateY: [0, 200, 100, 0],
//     backgroundColor: {
//         value: ['#eee', '#333', '#eee'],
//         duration: 2500,
//         easing: 'easeInOutQuad',
//     }
// });


/**
 * Ejemplo 4
 */
// let animatingBlock = document.querySelector('.block');

// let animation = anime({
//     targets: [animatingBlock],
//     duration: 1500,
//     delay: 500,
//     easing: 'easeInOutSine',
//     translateX: [100, 500, 200, 0],
//     translateY: [0, 200, 100, 0],

//     // control
//     autoplay: false,
// });

// // con evento
// document.addEventListener('click', () => {
//     animation.play();
// });


/**
 * Ejemplo 5
 */
// let animatingBlock = document.querySelector('.block');

// let animation = anime({
//     targets: [animatingBlock],
//     duration: 1500,
//     delay: 500,
//     easing: 'easeInOutSine',
//     translateX: [100, 500, 200, 0],
//     translateY: [0, 200, 100, 0],

//     // control
//     autoplay: false,
// });

// // con evento
// let paused = false;
// document.addEventListener('click', () => {
//     if (!paused) {
//         animation.play();
//         paused = true;
//     } else {
//         animation.pause();
//         paused = false;
//     }
// });

/**
 * Ejemplo 6
 */
// let animatingBlock = document.querySelector('.block');

// let animation = anime({
//     targets: [animatingBlock],
//     duration: 1500,
//     delay: 500,
//     easing: 'easeInOutSine',
//     translateX: [100, 500, 200, 0],
//     translateY: [0, 200, 100, 0],

//     // control
//     autoplay: false,
// });

// // con evento
// document.addEventListener('click', () => {
//     if (animation.began) {
//         animation.completed = false; // prevents animation.reset()
//         animation.reverse();
//     }
//     if (animation.paused) {
//         animation.play();
//     }
// });

/**
 * Ejemplo 7
 */
// let animatingBlock = document.querySelector('.block');

// let animation = anime({
//     targets: [animatingBlock],
//     duration: 1500,
//     delay: 500,
//     translateX: [100, 500, 50, 0],
//     translateY: [0, 200, 150, 0],

//     // callbacks
//     begin: (anim) => {
//         console.log(anim);
//     },
//     update: (anim) => {
//         console.log(anim);
//     },
//     complete: (anim) => {
//         console.log(anim);
//     }
// });

// animation.finished.then(function () {
//     console.log('animation concluded...')
// });


/**
 * Ejemplo 8
 */
let animatingBlocks = document.querySelectorAll('.block');

let animation = anime.timeline({
    duration: 1500,
    easing: 'easeInOutSine'
});
animation
    .add({
        targets: [animatingBlocks[0]],
        translateX: [100, 500, 50, 0],
        translateY: [0, 200, 150, 0],
    })
    .add({
        targets: [animatingBlocks[1]],
        translateX: [50, 30, 200, 0],
        translateY: [0, 50, 400, 0],
        rotate: { value: '1turn', delay: 500 }
    }, '-=200')
    .add({
        targets: [animatingBlocks[2]],
        translateX: [100, 500, 50, 0],
        translateY: [0, 200, 150, 0],
        rotate: '-3turn'
    }, '-=400')
    .add({
        targets: [animatingBlocks[3]],
        translateX: [0, 30, 500, 0],
        translateY: [0, 400, 150, 0],
        scale: [1, 1.4, 0.8, 1]
    }, '-=100');

