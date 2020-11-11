/**
 * Vars
 */
const toggle = document.querySelector(".menu_toggle");
const nav = document.querySelector("nav");
const nav_children = document.querySelectorAll("nav li");

let toggle_opened = false;
let animation;

/**
 * Methods
 */

/**
 * Toggle open
 */
const animation_Toggle_Open = () => {
    /**
     * variables
     */



    // necestiamos algun css 
    anime.set([nav], {
        translateX: "-100%",
        opacity: 0,
    });
    anime.set([nav_children], {
        translateX: "-100%",
        opacity: 0,
    });


    //creamos el timeline
    animation = anime.timeline({
        duration: 350,
        easing: "easeInOutSine",

        complete() {

            console.log("Menú abierto!!");
        },
    });


    animation
        .add({
            targets: [nav],
            translateX: 0,
            opacity: 1,
        })
        .add({
            targets: [nav_children],
            translateX: 0,
            opacity: 1,
            delay: anime.stagger(100),
        },"-=200");
};

/**
 * Toggle close
 */
const animation_Toggle_Close = () => {
    console.log("Cerrando menú!");

    //
    anime.set([nav], {
        translateX: "0%",
        opacity: 1,
    });
    anime.set([nav_children], {
        translateX: 0,
        opacity: 1,
    });


    //
    animation = anime.timeline({
        duration: 350,
        easing: "easeInOutSine",
        
        complete() {
            console.log("Menú Cerrado!!");
        },
    });


    //
    animation
        .add({
            targets: [nav_children],
            translateX: '-100%',
            opacity: 0,
            delay: anime.stagger(100),
        })
        .add({
            targets: [nav],
            translateX: "-100%",
        },"-=50");
};

/**
 * Events
 */
toggle.addEventListener("click", () => {
    if (toggle_opened) {
        animation_Toggle_Close();
        toggle_opened = false;
    } else {
        animation_Toggle_Open();
        animation.finished.then(()=> {
            toggle_opened = true;
            masFuncions();
        })
        
    }
});
