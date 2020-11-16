# Tema 3. Ejercicio opcional

Modificar la versión del ejemplo reflejos con async/await d para que en vez de
medir solo una vez los reflejos entre en un bucle que permita hacer todos los
intentos que se desee.

El bucle de intentos finalizará si se tarda más de 5 segundos en hacer click. Una
vez fuera del bucle mostrar el mensaje "Final de la prueba de reflejos".

Recomendaciones:

1) Añadir un bucle que ejecute todo el código de la función start cíclicamente.
2) Añadir a la promesa response un temporizador de 5 segundos que al vencer
rechaze la promesa con el código -1 (con () => reject(-1) o con () => {throw -1}).
3) Modificar también el bloque catch para que si se recibe -1 (en vez de un string)
se interrumpa el bucle con la sentencia break.
4) Incluir después del bucle una sentencia que muestre el mensaje de finalización
indicado.