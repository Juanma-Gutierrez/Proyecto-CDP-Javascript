"use strict";

/*
 * Elimina todos los options que había creados en provincia y poblacion
*/
function limpiaCampos(id, frase) {
    // seleccionamos todos los elementos option que hay en el nodo #id (#ccaa p.e.)
    var longitud = document.querySelectorAll("#" + id + " option").length;
    // limpiamos los valores anteriores de población y provincia si >1 (> "Selecciona ...")
    console.log(frase, longitud);
    if (longitud >= 1) {
        var elemento = document.getElementById(id);
        // mientras elemento tenga algún hijo, lo eliminamos
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
        const seleccionar = document.createElement("option");
        seleccionar.text = frase;
        // Creamos en elemento la frase enviada ("Selecciona provincia" p.e.)
        elemento.appendChild(seleccionar);
    }
}