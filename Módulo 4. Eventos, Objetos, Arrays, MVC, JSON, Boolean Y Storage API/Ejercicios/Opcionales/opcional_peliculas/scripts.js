// Contenedor
const inicial = JSON.stringify(["Super López", "V de Vendetta", "Orígen"]);
localStorage.setItem("c", localStorage.getItem("c") || inicial);
console.log(localStorage.getItem("c"));

// MODELO
let mis_peliculas = JSON.parse(localStorage.getItem("c"));
console.log(JSON.parse(localStorage.getItem("c")));

// VISTA
const showView = () => {
    let i = 0;
    let view = "";
    while(i < mis_peliculas.length) {
        view += `<li>${mis_peliculas[i++]}</li>`;
    };
    
    return view;
};

// CONTROLADOR
const showContr = () => {
    document.getElementById("listadoPelis").innerHTML = showView();
};

const addContr = () => {
    let peli = document.getElementById("pelicula").value;
    mis_peliculas.push(peli);
    localStorage.setItem("c", JSON.stringify(mis_peliculas));
    document.getElementById("pelicula").value = "";
    showContr();
}

const delContr = () => {
    localStorage.setItem("c", inicial);
    
    // OPCIÓN 1
    // location.reload();
    
    // OPCIÓN 2
    mis_peliculas = JSON.parse(localStorage.getItem("c"));
    showContr();
}

// Eventos
document.addEventListener("DOMContentLoaded", showContr);
document.addEventListener("click", ev => {
    if(ev.target.matches("#add")) addContr();
});
document.addEventListener("click", ev => {
    if(ev.target.matches("#reset")) delContr();
});
