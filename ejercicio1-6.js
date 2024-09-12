//Arrays
//Ejercicio 1: Declara un array llamado numeros con los números del 1 al 10. Escribe un bucle que multiplique cada número por 2 y almacene los resultados en un nuevo array. Muestra el array original y el nuevo array en la consola.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
let numerosMultiplicados = [];

for(let i = 0; i < numeros.length; i++){
    console.log(numerosMultiplicados.push(numeros[i] * 2));
}
console.log("Numeros originales: " + numeros);
console.log("Numeros multiplicados por 2: " + numerosMultiplicados);