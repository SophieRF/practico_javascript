//Introducción al DOM
//Ejercicio 1: En el html muestra tres elementos de tipo <p> y haz un botón que dispara una función y nos permita cambiar todos nuestros elementos de tipo p en nuestra pagina de color azul
const button = document.getElementById("b1");
const changeColor = () => {
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(parrafo => {
        parrafo.classList.add('blueP');
    });
}
button.addEventListener("click",() => {
    changeColor();
});