document.addEventListener('DOMContentLoaded', () => {
    setInterval(mostrar_fecha, 1000);
    mostrar_fecha();
});

const mostrar_fecha = () => {
    // 21:32:16,7
    let reloj = new Date();
    let hora = reloj.getHours();
    let minuto = reloj.getMinutes();
    let segundo = reloj.getSeconds();
    let milisegundo = reloj.getMilliseconds();
    let hora_compuesta = `${hora}:${minuto}:${segundo},${milisegundo}`;
    document.getElementById("reloj").innerHTML = hora_compuesta;
}