//Objetos en JavaScript
//Ejercicio 1: Define un objeto persona con las propiedades nombre, edad, y ciudad. Luego, agrega un método que permita cambiar la ciudad de la persona. Usa el método para actualizar la ciudad y muestra las propiedades actualizadas en la consola.
let persona = {
    nombre: "Sofia",
    edad: 31,
    ciudad: "",
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
        console.log("Datos actualizados: \n" + "Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nCiudad: " + this.ciudad);
    }
}
persona.cambiarCiudad("Mendoza");