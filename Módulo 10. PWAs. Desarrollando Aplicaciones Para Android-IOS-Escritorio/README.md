# Módulo 10. PWAs. Desarrollando Aplicaciones Para Android/IOS/Escritorio

## [Tema 1. Introducción a las PWAs](https://www.youtube.com/watch?v=z8bHfQRwx5c)

-  Progressive Web Application o Aplicación Web Progresiva
- Es una aplicación web que utilizando los últimos avances de las tecnologías web proporciona una experiencia similar a una aplicación nativa tanto en ordenador como en dispositivo móvil 
    – Usa HTML5/CSS3/JS (caches, service workers, notificaciones, …) 
    – Es instalable 
    – Es responsive
- Originalmente propuestas por Google en 2015

### Características

- **Progresiva**: 
  – Funciona para todos los usuarios y con cualquier navegador, en su núcleo está la mejora progresiva utilizando las características disponibles del dispositivo y navegador, no rompe o empeora la experiencia de los navegadores que no las soporten 
- **Contenido indexable y rastreable:**
  - Se identifican como apps gracias al manifest y el service worker 
- **Enlazable**: 
  - Via la URL o dirección web 
- **Instalable**: 
  - Sin tener que pasar por la “tienda” 
- **Cautivadora**: 
  - Look and feel de una aplicación nativa, nada de barras de navegación, cursores, letras pequeñas, webs cortadas, …
- **Seguras**: 
  - Usan HTTPs para prevenir ataques y modificación del contenido.
- **Se actualiza automáticamente**: 
  - La propia PWA se encarga de ver la versión que tiene y actualiza en segundoplano cualquier elemento o cambio que haya podido haber 
- **Accesible sin conexión**: 
  - Gracias a las cachés 
- **Rápidas**: 
  - Cargan casi al instante, dando una gran sensación de inmediatez 
- **Notificaciones push**: 
  - Pueden mandar notificaciones push al smartphone, incluso estando la PWAcerrada

### Ventajas y desventajas

- **Ventaja principal:**
  - 1 sola app para todos los dispositivos
- **Desventajas principales**
  - No va a la Google Play o Apple Store 
    - Aunque hay maneras de subirlas 
  - Soporte en navegadores 
    - Chrome > 40, Safari > 11.1, Firefox > 44, Edge > 17

### Checklist

- https://developers.google.com/web/progressive-webapps/checklist 
- Rápida y confiable 
  - Carga rápido incluso en 3G 
  - Responde con un 200 OK incluso sin conexión de red 
- Instalable 
  - Usa HTTPS 
  - Registra un service worker 
  - Provee metadatos para añadirla a la página principal
- Optimizaciones PWA 
  - Redirige el tráfico HTTP a HTTPS 
  - Tiene una pantalla de bienvenida (spashscreen) 
  - Fija un color para la barra de direcciones 
  - El contenido tiene el tamaño correcto para el viewport 
  - Tiene una etiqueta “meta” “viewport” con “initial-scale” 
  - Presenta algún contenido cuando no hay JS 
  - Provee un apple-touch-icon 
- Adicionalmente 
  - Cada página tiene una URL 
  - Las transiciones no parece que se bloqueen con la red 
  - Funciona cross-browser


## [Tema 2. PWAS. Utilidades](https://www.youtube.com/watch?v=Rx8lrjKQgEg)

### Utilidades

- TrustedWeb Activities
- Lighthouse
- PwaBuilder ▪ Pwa Starter
- Glitch
- Ejemplos y case studies

### TWA – Cómo llevar nuestra PWA a la Play Store

- Ya se pueden llevar a la Play Store gracias a las Trusted Web Activity
- Una Trusted Web Activity ejecuta un Chrome a pantalla completa dentro de una app Android, sin la interfaz visible dejandode parecer unnavegador
- Documentación oficial TWA
  - https://developers.google.com/web/android/trusted-web-activity
- Algunos posts TWA: 
  - https://medium.com/@firt/google-play-store-now-open-forprogressive-web-apps-ec6f3c6ff3cc
  - https://www.genbeta.com/desarrollo/trusted-web-activity-puntoinflexion-desarrolladores-puedan-distribuir-sus-progressive-web-appgoogle-play

### Extensión de Chrome - Lighthouse

- https://developers.google.com/web/tools/lighthouse/
- Herramienta que provee Google para auditar webs
  - Rendimiento
  - PWA
  - Mejores prácticas
  - Accesibilidad
  - SEO

### PWA Builder

- Te ayuda a crear una PWA a partir de un sitio web
  - https://www.pwabuilder.com/
- Muchas utilidades adicionales:
  - https://components.pwabuilder.com/
  - https://www.pwabuilder.com/generate
  - https://www.pwabuilder.com/serviceworker

### PWA Starter

- Esqueleto en GitHub para comenzar con nuestra PWA
- Creado por PwaBuilder
- URL: 
  - https://github.com/pwa-builder/pwa-starter 
- Demo: 
  - https://pwa-starter-demo.glitch.me/

### Glitch

- Site muy útil con un editor de código online 
- Permite edición compartida 
- Permite desplegar (con https) 
- Permite unir con github 
- Consola
- URL:
  - https://glitch.com/

### Ejemplos

- https://pwa.rocks/
- http://progressivewebapproom.com/
- https://pwa-directory.appspot.com/
- https://app.starbucks.com/
- https://twitter.com/home
- https://app.ft.com/
- https://pokedex.org/ 

## [Tema 3. Desarrollando una PWA](https://www.youtube.com/watch?v=0cfCnSPwHtM)

- Instalar extensión Chrome LIghthouse
- Añadir manifest
- Proveer funcionalidad offline usando un *service-worker*.
- Mejorar la funcionalidad offline con las cachés.
- Hacer PWA instalable.

### Recursos
- [Ejemplo de GitHub](https://github.com/ging-moocs/MOOC_html_mod10-PWA_ejemplo)
- [Tutorial completo](https://web.dev/progressive-web-apps/)

## [Tema 3.1. Desarrollando una PWA. Lighthouse y descarga del código](https://www.youtube.com/watch?v=TouxMO1v7qE)

```bash
$ git clone https://github.com/ging-moocs/MOOC_html_mod10-PWA_ejemplo.git
$ cd MOOC_html_mod10-PWA_ejemplo
$ git checkout sinPWA

# package.json
# "dependencies": {
#         "express": "^4.17.1",
#         "express-http-to-https": "^1.1.4"

$ npm install 
$ node server.js
```

## [Tema 3.2. Desarrollando una PWA. Manifest.json](https://www.youtube.com/watch?v=h_ozUVUD3rI)

### Manifest
- Metainformación sobre la aplicación en un fichero JSON.
- Icons
  - Mínimo 192 y 512.
- Añadirlo a la aplicación
  - *index.html*
    - Dentro de *<head>* añadir **<link rel="manifest" href="files/manifest.json">**.

```html
<!-- METAS interesantes de añadir -->
<meta name="description" content="Una app de pelis">
<meta name="theme-color" content="#6200ee">
<meta name="apple-mobile-web-app-title" content="Pelis">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link rel="apple-touch-icon" href="files/icons/camera192.png">
<link rel="icon" sizes="142x142" href="files/icons/camera144.ico">
<link rel="icons" type="image/png" sizes="144x144"  href="files/icons/camera144.png">
```

### Recursos
- [Web App Manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)

## [Tema 3.3. Desarrollando una PWA. Service Worker](youtube.com/watch?v=WPO_V1_3Vjg)

### Service-worker

- Añadir el siguiente contenido al final de la página **index.html**.
  
```javascript
// Al final de la página index.html entre tags "script"
if("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then((reg) => {
        console.log("Service worker registered!", reg);
      });
  });
}
```

- **service-worker.js** es estándar por lo que se podría reutilizar de alguna otra app. Por ejemplo [este](https://raw.githubusercontent.com/ging-moocs/MOOC_html_mod10-PWA_ejemplo/master/public/service-worker.js).

## [Tema 3.4. Desarrollando una PWA. Install](youtube.com/watch?v=1GpGSkCHBQU)

**Instalación**
- Poner fichero **install.js** al final del documento HTML.
- Añadir botón oculto.

```html
<buton id="btnInstall" aria-label="Install" hidden>Instalar APP</buton>
<script src="files/install.js"></script>
```

**Contenido de install.js**
```javascript
'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('btnInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(ev){
    deferredInstallPrompt = ev;
    installButton.removeAttribute('hidden');
}

function installPWA(ev){
    console.log("ENTRA!!!!");
    deferredInstallPrompt.prompt();
    ev.srcElement.setAttribute('hidden', true);
    deferredInstallPrompt.userChoise.then((choice) => {
        if(choice.outcome === 'accepted'){
            console.log('Accepted');
        }else{
            console.log('Not accepted');
        }
        deferredInstallPrompt = null;
    })
}

window.addEventListener('appinstall', logAppInstalled);

function logAppInstalled(ev){
    console.log('APP Pelis instaladas');
}
```

## [Tema 3.5. Desarrollando una PWA. Despliegue en Glitch](https://www.youtube.com/watch?v=OnE1XZ2cCmY)

### Recursos
- [Glitch](https://glitch.com/)