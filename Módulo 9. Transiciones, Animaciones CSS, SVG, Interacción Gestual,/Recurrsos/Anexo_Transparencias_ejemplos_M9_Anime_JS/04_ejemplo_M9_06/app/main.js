


// Quick toggleing
/**
 * Seleccionamos los HTMLElements o NodeCollections necesarias para la animación
 */
let whatsappLogo = document.querySelector('svg.whatsapp');
let w_Bg = whatsappLogo.querySelector('.bg');
let w_Circle = whatsappLogo.querySelector('.circle');
let w_Tel = whatsappLogo.querySelector('.tel');

/**
 * Creamos las variables necesarias para la animación
 */
let w_animation_in;
let w_animation_out;

/**
 * Otras variables
 */
let opened = false;

/**
 * w_animate_in
 * Crear animación de entrada
 */
let w_animate_in = () => {

    // reset animations ongoing
    anime.remove([w_Bg, w_Circle, w_Tel]);

    // reset animation_out (por si está animando)
    w_animation_out = null;

    // launch animation_in
    w_animation_in = anime.timeline();

    w_animation_in
        // 1. fondo dentro
        .add({
            targets: [w_Bg],
            strokeDashoffset: '0%',
            fillOpacity: '1',
            duration: 500,
            easing: 'easeInOutQuad',
        })
        // 2. circulo dentro
        .add({
            targets: [w_Circle],
            scale: '1',
            easing: 'easeInOutQuad',
            duration: 500
        }, '-=200')
        // 3. telefono dentro
        .add({
            targets: [w_Tel],
            translateY: '0',
            opacity: '1',
            duration: 500,
            easing: 'easeInOutQuad',
        }, '-=350');
};


/**
 * w_animate_out
 * Crear animación de salida
 */
let w_animate_out = () => {

    // reset animations ongoing
    anime.remove([w_Bg, w_Circle, w_Tel]);

    // reset animation_in
    w_animation_in = null;

    // launch animation_out
    w_animation_out = anime.timeline();

    // add stages
    w_animation_out
        // 3. telefono fuera
        .add({
            targets: [w_Tel],
            translateY: '50px',
            opacity: '0',
            duration: 500,
            easing: 'easeInOutQuad',
        })
        // 2. circulo fuera
        .add({
            targets: [w_Circle],
            scale: '0',
            easing: 'easeInOutQuad',
            duration: 500
        }, '-=450')
        // 1. fondo fuera
        .add({
            targets: [w_Bg],
            strokeDashoffset: '313%',
            fillOpacity: '0',
            duration: 500,
            easing: 'easeInOutQuad',
        }, '-=350');
};


/**
 * evento y switch
 */
document.addEventListener('click', function () {
    if (!opened) {
        w_animate_in()
        opened = true;
    } else {
        w_animate_out();
        opened = false;
    }
});
