//Funciones de JavaScript
//Ejercicio 2: Crea una función llamada convertirCelsiusAFahrenheit que reciba un valor en grados Celsius y lo convierta a Fahrenheit. La fórmula es F = C × 1.8 + 32. Muestra el resultado en la consola.

function convertirCelsiusAFahrenheit(celsius){
    let fahrenheit = celsius * 1.8 + 32;
    console.log(celsius + "°C son equivalentes a " + fahrenheit + "°F")
} 

convertirCelsiusAFahrenheit(25);