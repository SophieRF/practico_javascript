//Eventos en DOM
//Ejercicio 1: Crea una lista (<ul>) con varios elementos (<li>). Escribe un script que agregue un evento click a cada elemento de la lista para que, cuando se haga clic en un li, se muestre su texto en la consola.

const lista = document.getElementById('lista');
const elementos = lista.getElementsByTagName('li');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function() {
        console.log("Hicise click en " + this.textContent);
    });
}
