//Operadores lógicos y condicionales
//Ejercicio 1: Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y determina cual es el mayor. Imprime el resultado en la consola.
let a = 5;
let b = 3;
let c = 8;
if (a > b && a > c) {
    console.log("El mayor es " + a);
} else if(b > a && b > c){
    console.log("El mayor es " + b);
} else if(c > a && c > b){
    console.log("El mayor es " + c);
}