//Operadores lógicos y condicionales
//Ejercicio 2: Crea un programa que pida al usuario un número y determine si es par o impar.
let numero = window.prompt("Ingrese un número para saber si es par o impar");
if(numero % 2 == 0){
    alert("El número " + numero + " es par");
}else if (numero % 2 == 1){
    alert("El número " + numero + " es impar");
}else{
    alert(numero + " no es un número");
}