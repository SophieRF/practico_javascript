//Eventos en el DOM
//Ejercicio 2: Crea un campo de texto y un botón en una página HTML. Escribe un script que haga que el botón deshabilite el campo de texto cuando se haga clic en él. Luego, añade otro botón que vuelva a habilitar el campo de texto.

const botonDeshabilitar = document.getElementById("b3");
const botonHabilitar = document.getElementById("b4");
const entrada = document.getElementById("inputText");

botonDeshabilitar.addEventListener('click', function() {
    entrada.disabled = true;
});
botonHabilitar.addEventListener('click', function() {
    entrada.disabled = false;
});