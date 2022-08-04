"use strict";

/*
 * Crea eventListeners
 */
function creaEventListers() {
    document
        .getElementById("menu-alta")
        .addEventListener("click", muestraFichaAlta);
    document
        .getElementById("menu-modi")
        .addEventListener("click", muestraFichaModi);
    document
        .getElementById("menu-cons")
        .addEventListener("click", muestraFichaCons);
    document
        .getElementById("menu-baja")
        .addEventListener("click", muestraFichaBaja);
    document.getElementById("guardar").addEventListener("click", guardarDatos);

    document.getElementById("ccaa").addEventListener("change", cargaProvincia);
    document
        .getElementById("provincia")
        .addEventListener("change", cargaPoblacion);
    document
        .getElementById("importar")
        .addEventListener("click", cargaDatosAleatorios);
    document
        .getElementById("borrar")
        .addEventListener("click", borrarTodo);
}
