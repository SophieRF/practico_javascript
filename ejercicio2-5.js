//Objetos en JavaScript
//Ejercicio 2: Crea un objeto libro con propiedades titulo, autor, y año. Luego, escribe un método que determine si el libro tiene más de 10 años desde su publicación. Muestra un mensaje en la consola indicando si el libro es antiguo o reciente.
let libro = {
    titulo: "Catching Fire",
    autor: "Suzanne Collins",
    anio: 2009
}
function esAntiguo(libro){
    if(2024 - libro.anio <= 10){
        return "El libro "+ libro.titulo + " es antiguo: " + false;
    }else{
        return "El libro "+ libro.titulo + " es antiguo: " + true;
    }
}
console.log(esAntiguo(libro));
