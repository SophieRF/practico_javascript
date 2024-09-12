//Operadores de asignación y bucles
//Ejercicio 2: Escribe un programa que utilice un bucle do...while para pedirle al usuario que ingrese un número mayor a 100. El bucle debe repetirse hasta que el usuario ingrese un número mayor a 100.
let numero;
do{
    numero = window.prompt("Ingrese un número mayor a 100");
}while(numero <= 100);

alert("Ingresaste un número mayor a 100: " + numero);