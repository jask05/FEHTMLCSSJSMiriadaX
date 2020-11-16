// Modelo
let peliculas = ["Toy Story", "Interstellar", "V de Vendetta", "Loca academia de policía", "Iron Man", "Rick y Morty"];
// let peliculas = [
//     {titulo: "Superlópez", director: "Javier Ruiz Caldera", "estreno": 2018},
//     {titulo: "E.T.", director: "Steven Spielberg", "estreno": 1982},
//     {titulo: "Interstellar", director: "Christopher Nolan", "estreno": 2014}
// ];

// Vista
const indexView = (pelis) => {
    // Object.keys(pelis).forEach(indice => console.log(`${indice} => ${pelis[indice]}`));
    html = "<ul>";
    pelis.forEach((peli, indice) => {
        html += `<li id="movieInfo">${peli} <button data-my-id="${indice}">Ver</button> 
            <button data-my-id="${indice}" id="editMovie">Editar</button>
            <button  data-my-id="${indice}" id="deleteMovie">Borrar</button></li>`;
    });
    html += `<input type="button" value="Añadir película" id="new-movie" />`;
    return html += "</ul>";
}

const createMovieView = () => {
    return `Introduce la nueva película: <input type="text" id="nuevaPeli" /> <button id="createContent">Añadir</button>`;
}

const editMovieView = (i) => {
    return `Introduce el nuevo nombre de la película "${peliculas[i]}": <input type="text" id="updateMovieInput" /> <button id="updateMovieBtn" data-update-id="${i}">Actualizar</button>`;
}

// Controlador
const indexContent = () => { document.getElementById("movies").innerHTML = indexView(peliculas); };

const newMovie = () => {  document.getElementById("movies").innerHTML = createMovieView(); }

const createContent = () => {
    peliculas.push(document.getElementById("nuevaPeli").value);
    indexContent();
}

const editContent = (i) => { document.getElementById("movies").innerHTML = editMovieView(i); }

const updateContent = (i) => {
    peliculas[i] = document.getElementById("updateMovieInput").value;
    indexContent();
}

const deleteContent = (i) => {
    peliculas.splice(i,1);
    indexContent();
}

// Eventos
document.addEventListener("DOMContentLoaded", ev => indexContent());
document.addEventListener("click", ev => {
    if(ev.target.matches("#new-movie")) newMovie();
    else if(ev.target.matches("#createContent")) createContent();
    else if(ev.target.matches("#movieInfo")) createContent();
    else if(ev.target.matches("#editMovie")) editContent(ev.target.dataset.myId);
    else if(ev.target.matches("#updateMovieBtn")) updateContent(ev.target.dataset.updateId);
    else if(ev.target.matches("#deleteMovie")) deleteContent(ev.target.dataset.myId);
})