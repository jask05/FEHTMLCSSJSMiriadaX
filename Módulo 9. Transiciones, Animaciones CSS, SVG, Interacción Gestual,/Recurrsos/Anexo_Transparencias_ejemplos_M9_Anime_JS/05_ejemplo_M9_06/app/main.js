

let sections = document.querySelectorAll('section[id^="page"]');
let sectionLinks = document.querySelectorAll('section[id^="page"] a[href^="#page"]');
let animation = null;

let animateSection = (activeSection) => {

    let incomingSection = document.querySelector('section#' + activeSection);
    let outgoingSection = document.querySelectorAll('section:not(#' + activeSection + ')');

    animation = anime.timeline({
        complete: (a) => {
            // replace section (just for example)
            a.set(outgoingSection, {
                translateX: '100%',
                opacity: .3,
            });
            outgoingSection.forEach(s => s.classList.remove('active'));
            incomingSection.classList.add('active');
        }
    });
    animation
        .add({
            targets: incomingSection,
            translateX: ['100%', '0%'],
            opacity: [.3, 1],
            zIndex: [1, 2],
            duration: 550,
            easing: 'easeInExpo',
        })

        .add({
            targets: outgoingSection,
            translateX: ['0%', '-100%'],
            opacity: [1, 0],
            zIndex: [2, 1],
            easing: 'easeInExpo',
            duration: 550,
        }, '-=550');

};

sectionLinks.forEach(link => {
    link.addEventListener('click', ev => {
        ev.preventDefault();

        let activeSection = ev.target.href.split('#').slice(-1).toString();
        animateSection(activeSection)
    });
});

