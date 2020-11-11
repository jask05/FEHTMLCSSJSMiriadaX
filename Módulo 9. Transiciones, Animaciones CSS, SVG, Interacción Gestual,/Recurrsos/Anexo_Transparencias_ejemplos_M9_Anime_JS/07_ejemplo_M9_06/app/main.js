
// vars
const links = document.querySelectorAll('a[navigate-to]');
let animation;
let stage = '#section_01';


// methods
const navigateTo = (id) => {
    animate_ToSection(id);
    animation.finished.then(() => {
        //clean up
        stage = id;
    });
};

const animate_ToSection = id => {
    //1. vars
    const from = document.querySelector(stage);
    const to = document.querySelector(id);


    //2. sets
    anime.set([to], {
        visibility: 'visible', 
        translateY: '100%',
        opacity: 1
    });

    //3. anime
    animation = anime.timeline({
        duration: 500,
        easing: 'easeInOutSine', 

        //5. callback
        complete() {
            anime.set([from], {
                visibility: 'hidden', 
                opacity: 0
            });
        }
    });

    //4. animation
    animation
        .add({
            targets: [from], 
            translateY: '-100%', 
            opacity: 0
        })
        .add({
            targets: [to], 
            translateY: '0%', 
            opacity: 1
        }, '-=500');
};


//events
links.forEach(link =>  {
    link.addEventListener('click', ev => {
        ev.preventDefault();

        const id = ev.target.getAttribute('navigate-to');
        navigateTo(id);
    });
});