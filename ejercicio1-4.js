//Funciones de JavaScript
//Ejercicio 1: Escribe una función llamada esPar que reciba un número como parámetro y retorne true si el número es par y false si es impar. Prueba la función con diferentes números.
function esPar(numero){
    if(numero % 2 == 0){
        return true;
    }else if(numero % 2 == 1){
        return false;
    }else{
        return "Error. Debe ingresar un número";
    }
}
console.log(esPar(8));