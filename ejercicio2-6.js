//Arrays
//Ejercicio 2: Crea un array vacío llamado pares. Escribe un bucle for que itere hasta 20 y que agregue los primeros 10 números pares al array. Al final, imprime el array pares en la consola.
let pares = [];
for(let i = 1; i < 21; i++){
    if(i % 2 == 0){
        pares.push(i);
    }
}
console.log("Primeros 10 números pares: " + pares)