let toggle = document.querySelector('.toggle');
let toggleBall = toggle.querySelector('.toggle_ball');
let app = document.querySelector('.app');

let animation = anime.timeline({
    easing: "easeOutExpo",
    autoplay: false
});

animation
    .add({
        targets: [toggleBall],
        translateX: 24,
        duration: 500
    })
    .add({
        targets: [toggleBall],
        backgroundColor: 'rgb(255, 255, 255)',
        duration: 500,
    }, '-=400')
    .add({
        targets: [toggle],
        borderColor: 'rgb(255, 255, 255)',
        duration: 500,
    }, '-=500')
    .add({
        targets: [app],
        backgroundColor: '#333',
        duration: 500,
    }, '-=500')
    .add({
        targets: [toggle],
        rotate: '2turn',
        scale: [1, 1.3, 0.8, 1],
        duration: 1500,
    }, '-=100');


document.addEventListener('click', () => {
    if (animation.began) {
        animation.completed = false; // prevents animation.reset()
        animation.reverse();
    }
    if (animation.paused) {
        animation.play();
    }
});


