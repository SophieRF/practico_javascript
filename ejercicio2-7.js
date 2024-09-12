//Introducción al DOM
//Ejercicio 2: Crea un formulario simple con un campo de texto y un botón. Escribe un script en JavaScript que muestre una alerta con el valor ingresado en el campo de texto cuando el usuario haga clic en el botón.
const boton = document.getElementById('b2');
const inputTexto = document.getElementById('textInput');

boton.addEventListener('click', function() {
    const valorTexto = inputTexto.value;
    alert('Has ingresado: ' + valorTexto);
});