"use strict";

/**
 * 
 * animation_FadeIn
 * 
 * Ejemplo de animación. Todas las animaciones tienen siempre 3 pasos: 
 *       a. Seleccionamos los elementos a animar
 *       b. Hemos visto que anime se comporta mejor con CSS declarado en el atributo style del HTML
 *          Por lo tanto, si queremos hacer alguna animación, podemos iniciar los valores con anime.set
 *       c. Animamos, con un timeline mejor, para poder concatenar animaciones...
 *       d. Si queremos meter alguna función después de animar podemos meter el callback complete o usar promesas...
 * 
 * 
 */
var animation_FadeIn = function animation_FadeIn() {
  // Selecciona elementos a animar
  var splash = GAME_UI.pages.splash;
  var title = splash.querySelector('h1');
  var logo = splash.querySelector('img'); // Necesitas meter algo de CSS antes de la animación??

  anime.set(splash, {
    visibility: 'visible',
    opacity: 0
  });
  anime.set(title, {
    opacity: 0,
    translateY: 50
  }); // Anima!

  animation_layout = anime.timeline({
    duration: 500,
    easing: 'easeInOutSine'
  });
  animation_layout.add({
    targets: [splash, logo],
    opacity: 1
  }).add({
    targets: [title],
    opacity: 1,
    translateY: 0
  }, '-=200');
};
/**
 * El resto de animaciones las construyes tú. 
 * Recuerda que puedes guardar las animaciones del layout
 * en la variable global animation
 */


var animation_SplashToMenu = function animation_SplashToMenu() {
  // Selecciona elementos a animar
  var from = GAME_UI.pages.splash;
  var to = GAME_UI.pages.swiperContainer; //Desactivamos el logo para que aparezca al terminar

  document.querySelector('svg').classList.remove('active'); // Necesitas meter algo de CSS antes de la animación??

  anime.set(to, {
    visibility: 'visible',
    translateY: '100%',
    opacity: 0
  }); // Anima!

  animation_layout = anime.timeline({
    duration: 750,
    easing: 'easeInOutSine'
  });
  animation_layout.add({
    targets: [from],
    translateY: '-100%',
    opacity: 0
  }).add({
    targets: [to],
    translateY: 0,
    opacity: 1
  }, '-=750');
  animation_layout.finished.then(function () {
    document.querySelector('svg').classList.add('active');
  });
};

var animation_MenuToMain = function animation_MenuToMain(getTo) {
  //Seleccionar que animar
  var from = document.querySelector('#swiper_page');
  var to = document.querySelector('#main_page'); //Hay que meter CSS? 
  //Por defecto el juego esta hidden. Antes de empezar la animación hay que dejarlo visible

  anime.set(to, {
    visibility: 'visible',
    translateY: '-100%',
    //Esta arriba para que caiga
    opacity: 0
  }); //animación

  animation_layout = anime.timeline({
    duration: 750,
    easing: 'easeInOutSine'
  });
  animation_layout.add({
    targets: [from],
    translateY: '100%',
    opacity: 0
  }).add({
    targets: [to],
    translateY: '0%',
    //va de -100 a 0
    opacity: 1 // Cambia la opacidad  

  }, '-=750'); //Para que se haga al tiempo que desaparece
  //Que hacer cuando termine ??? promesas

  animation_layout.finished.then(function () {
    game = new Game();
    game.start();
  });
};

var animation_MainToMenu = function animation_MainToMenu(getTo) {
  //Seleccionar que animar
  var to = document.querySelector('#swiper_page');
  var from = document.querySelector('#main_page'); //Hay que meter CSS? 
  //Por defecto el juego esta hidden. Antes de empezar la animación hay que dejarlo visible

  anime.set(to, {
    visibility: 'visible',
    translateY: '100%',
    //Esta arriba para que caiga
    opacity: 0
  }); //animación

  animation_layout = anime.timeline({
    duration: 750,
    easing: 'easeInOutSine'
  });
  animation_layout.add({
    targets: [from],
    translateY: '-100%',
    opacity: 0
  }).add({
    targets: [to],
    translateY: '0%',
    //va de -100 a 0
    opacity: 1 // Cambia la opacidad  

  }, '-=750'); //Para que se haga al tiempo que desaparece
  //Que hacer cuando termine ??? promesas

  animation_layout.finished.then(function () {
    anime.set(from, {
      visibility: 'hidden'
    });
    game.ended = true;
    document.querySelector('.game').innerHTML = '';
  });
};
/**
 * 
 * Ejemplo de un popup, como vemos, es lo mismo....
 */


var animation_PopupPause = function animation_PopupPause() {
  var popup = GAME_UI.modalWindows.pause;
  anime.set(popup, {
    translateY: '20%',
    opacity: 0,
    visibility: 'visible'
  });
  animation_layout = anime.timeline({
    duration: 300,
    easing: 'easeOutQuad'
  });
  animation_layout.add({
    targets: popup,
    translateY: '0%',
    opacity: 1
  });
};
/**
 * 
 * Ejemplo de un popup, como vemos, es lo mismo....
 */


var animation_PopupContinue = function animation_PopupContinue() {
  var popup = GAME_UI.modalWindows.pause;
  animation_layout = anime.timeline({
    duration: 300,
    easing: 'easeOutQuad'
  });
  animation_layout.add({
    targets: popup,
    translateY: '-20%',
    opacity: 0
  });
  animation_layout.finished.then(function () {
    game.pauseOrResume();
    anime.set(popup, {
      visibility: 'hidden'
    });
  });
};
/**
 * 
 * Ejemplo de un popup, como vemos, es lo mismo....
 */


var animation_ConfirmIn = function animation_ConfirmIn() {
  var popup = GAME_UI.modalWindows.confirm;
  anime.set(popup, {
    translateY: '-20%',
    opacity: 0,
    visibility: 'visible'
  });
  animation_layout = anime.timeline({
    duration: 300,
    easing: 'easeOutQuad'
  });
  animation_layout.add({
    targets: popup,
    translateY: '0%',
    opacity: 1
  });
};

var animation_ConfirmOut = function animation_ConfirmOut() {
  var popup = GAME_UI.modalWindows.confirm;
  animation_layout = anime.timeline({
    duration: 300,
    easing: 'easeOutQuad'
  });
  animation_layout.add({
    targets: popup,
    translateY: '20%',
    opacity: 0
  });
  animation_layout.finished.then(function () {
    anime.set(popup, {
      visibility: 'hidden'
    });
  });
};