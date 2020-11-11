
let toggle = document.querySelector('.toggle span');
let sidebar = document.querySelector('.sidebar');
let sidebarItems = document.querySelectorAll('.sidebar_item');
let sidebarOpened = false;
let animationIn = null;
let animationOut = null;

let animationIn_end_promise;

/**
 * Con special transforms...
 */
anime.remove([toggle, sidebar, sidebarItems]);
anime.set(sidebar, {
    translateX: '-100%'
});
anime.set(sidebarItems, {
    translateX: '-40%'
});


let sidebarAnimationIn = function () {
    animationIn = anime.timeline();
    animationOut = null;
    sidebarOpened = !sidebarOpened;

    // move sidebar
    animationIn.add({
        targets: [sidebar],
        translateX: '0%',
        opacity: 1,
        duration: 650,
    });

    // move toggle
    animationIn.add({
        targets: [toggle],
        scale: '1.3',
        backgroundColor: '#eee',
        duration: 650,
    }, '-=600');

    // stagger elements
    animationIn.add({
        targets: [sidebarItems],
        translateX: '0%',
        opacity: 1,
        duration: 650,
        delay: anime.stagger(100),
    }, '-=500');

};

let sidebarAnimationOut = function () {
    animationOut = anime.timeline();
    animationIn = null;
    sidebarOpened = !sidebarOpened;

    // stagger elements
    animationOut.add({
        targets: [sidebarItems],
        translateX: '-40%',
        opacity: 0,
        duration: 650,
        delay: anime.stagger(100)
    });

    // move toggle
    animationOut.add({
        targets: [toggle],
        scale: 1,
        backgroundColor: '',
        duration: 650
    }, '-=600');

    // move sidebar
    animationOut.add({
        targets: [sidebar],
        translateX: ['0%', '-100%'],
        opacity: [1, 0],
        duration: 650
    }, '-=600');
};




toggle.addEventListener('click', function () {
    if (!sidebarOpened) {
        sidebarAnimationIn();
    } else {
        sidebarAnimationOut();
    }
});

