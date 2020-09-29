# Desarrollo Frontend con HTML, CSS y Javascript (10.ª edición) - MiriadaX

## CSS

### :arrow_forward: Propiedades grid-column y grid-row

A veces necesitamos definir la posición y la extensión de un elemento ( ítem ) dentro del contenedor grid. 
Por ejemplo para decir que el elemento se sitúa entre la **segunda y la tercera línea vertical** y **entre la segunda y la tercera línea horizontal** tenemos que escribir estas reglas:

```css
.item{
  grid-column-start:    2;
  grid-column-end:      3;
  grid-row-start:       2;
  grid-row-end:         3;
}
```

Podemos escribir lo mismo utilizando solo dos líneas de código:
```css
.item{
    grid-column: 2 / 3;
  grid-row: 2 / 3;
}
```
En estos ejemplos los números utilizados son los nombres de las [líneas](http://w3.unpocodetodo.info/css3/grid-palabras-clave.php#lineasycarriles) verticales y horizontales definidas con grid-template-columns y/o grid-template-rows.

![Grid-colum grid-row](Recursos/css_grid.png)

También podemos utilizar la palabra clave span ( se extiende ). Por ejemplo span 1 quiere decir que el ítem se extiende exactamente una celda, fuera el que fuera el tamaño de esta.
```css
.item{
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
}
```

### :arrow_forward: Propiedad grid-area
a propiedad grid-area es una manera abreviada para definir la posición y la extensión de un ítem dentro del contenedor grid. La sintaxis es la siguiente:
```css
.item{
	grid-area: <grid-row-start> / <grid-column-start> / < grid-row-end> / < grid-column-end>
}
```
O sea: podemos tomar esto:

```css
.item{
  grid-row-start: 2;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-column-end: span 3;
  }
```

Y transformarlo en esto:
```css
.item{
  grid-area: 2 / 2 / 3 / span 3;
}
```

![Grid-area](Recursos/css_grid_area.png)

Pero la propiedad grid-area puede tener una sintaxis alternativa:
```css
.item{
  grid-area: el-nombre-de-una-area;
}
```

## Javascript

**Arguments**: el array de parámetros.
- Una función tiene un array de nombres **arguments**.
  - El array **arguments** permitiría saber su número total y acceder a todos.
```javascript
function greet(){
  return `${arguments[0]} ${arguments[1]}, how are you?`;
};

greet("Good mornin", "Peter"); // "Good morning Peter, how are you?"
greet("Hello", "Peter"); // "Hello peter, how are you?"
```

### Funciones como objetos
- Pueden asignarse a variables, propiedades, pasarse como parámetros, etc.
- Literal de función: **function(<argumentos>){<sentencias>}
  - Construye un objeto de tipo función que no tiene nombre.
    - Puede guardarse en variables o parámetros como cualquier otro valor
    - Se invoca aplicando el operador paréntesis **()**.
- El **operador paréntesis()** ejecuta el código de un objeto **function**
```javascript
const greet = function(greeting, person){
  return `${greeting} ${person}, how are you?`;
};

greet("Good mornin", "Peter");  // "Good morning Peter, how are you?"
greet("Hello", "Peter");        // "Hello peter, how are you?"
```

### Parámetros por defecto
- El valor por defecto se utiliza en la invocación, cuando ese parámetro sea **undefined**.
```javascript
const greet = function(greeting="Hi", person="my friend"){
  return `${greeting} ${person}, how are you?`;
};

greet("Hello");  // "Hello my friend, how are you?"
greet();        // "Hi my friend, how are you?"
```

### Fat arrow function (notación fleca) (ES6)
- Function se sustituye por los paréntesis y la fecha **=>**.
- **Nunca** puede modificar el contexto. El objeto **this** tiene visibilidad sintáctica siempre que se utiliza.
- **Solo** se pueden utilizan para **programación funcional**. **NO** pueden utilizarse como constructores de objeto (usar en ese caso funciones tradicionales).
```javascript
// Función tradicional
const greet = function(greeting, person){
  return `${greeting} ${person}, how are you?`;
}

// Función arrow
const greet = (greeting, person) => {
  return `${greeting} ${person}, how are you?`;
}

// Cuando solo hay un parámetro de entrada NO SON NECESARIOS los paréntesis
// Si la función SOLO retorna UNA expressión, NO ES NECESARIO la sentencia return
const square = x => x*x;
// No hay parámetro, se ponen los paréntesis.
const say_hi = () => "Hi, how are you?";
```

### Declaraciones locales de una función y ámbito
Las variables y funciones tienen visibilidad sintáctica en Javascript.
- Son visibles dentro del ámbito donde se declaran.
- Las funciones son **visibles** antes de su declaración (igual que las variables *var*).

Una función puede tener declaraciones locales de variables y funciones.
- Las declaraciones son visibiles solo dentro de la función.

Variables y funciones externas son visibles en el bloque de la función.
- Siempre que no sean tapadas con otras declaraciones locales **del mismo nombre**.
  - Una declaración **local** tapa a una **global** del mismo nombre.

![Declaraciones locales de una función y ámbito](Recursos/js_es6_declaraciones_locales_funcion_ambito.png)

### Objetos, propiedades, métodos, DOM, eventos e interacción

**Objetos**
- Agrupación de:
  - **Variables** "especiales" denominadas **propiedades**.
  - **Funciones** "especiales" denominadas **métodos**.
- Las propiedades de los objetos forman un árbol y **pueden crear** árboles **multinivel anidados** unos objetos de otros.
- Los nombres de las propiedades y métodos **tienen la misma sintáxis que las variables**: a, _method, $1, etc.
  - Conviene que sean diferentes si pertenecen al mismo objeto (no es obligatorio).
- El **operador "." (punto)** se utiliza como propiedades y métodos 
  - Para acceder a una propuedad de un objeto
    - Consulta del valor de la propiedad **y** del objeto **obj**: obj.y
    - Asignar el valor de la propiedad **y** del objeto **obj**: obj.y = 5
  - Para incovcar un **método** de un **objeto**: document.write("Hola");
    - Invocar a un método que **NO** pertenece a un objeto causa **error**.

**Entorno global: windo, document y Web APIs**
- El objeto **windows** es el entorno global de ejecución de Javascript en el navegador.
  - Sus propiedades dan acceso a los elementos de página web, del navegador y de Javascript.
    - **This** es una referencia al **entorno de ejecución** y referencia **window** cuando el programa está en el entorno global.
- El entorno global da acceso a **APIs** del navegador:
  - DOM, Canvas, Fetch, Storage, Full Screen, Touch Events, Service Workers, WebRTC, etc.
- **Document** da acceso a la página HTML con la **API DOM**.
  - Document se referencia como **window.document, this.document o document**.

**Acceso DOM y cajas visuales**
- **Objeto DOM** 
  - Permite manipular elementos HTML desde un programa.
  - Tiene una caja visual asociada
  - **document.getElementByID("id_x")**: método que obtiene el objeto DOM del elemento HTML con atributo **id="id_x"**.

## Bibliografía

### CSS
- [Unpocodetodo](http://w3.unpocodetodo.info/css3/grid-items.php)
  - [CSS - Líneas y carriles](http://w3.unpocodetodo.info/css3/grid-palabras-clave.php#lineasycarriles)
- [Learncssgrid](https://learncssgrid.com/)
- [Grid Cheatsheet](https://yoksel.github.io/grid-cheatsheet/)

### Javascript
- [Fundamientos Javascript ES6](https://bluuweb.github.io/javascript/fundamentos/#var-vs-let-vs-const)
- [10 Cosas de JAVASCRIPT que debes conocer para React/Vue/Angular](https://www.youtube.com/watch?v=Z4TuS0HEJP8)
- [Arrow Functions](https://deployando.net/2019/06/11/javascript-arrow-functions/)
- [Objetos](http://javascript.info/object-basics)

