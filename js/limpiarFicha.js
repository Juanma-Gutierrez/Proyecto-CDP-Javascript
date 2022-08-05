"use strict";

/*
 * Borra todos los campos de la ficha de alta y reinicia los option de ccaa, provincia y población
 */
function limpiarFicha() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido1").value = "";
    document.getElementById("apellido2").value = "";
    document.getElementById("direccion").value = "";
    limpiaCampos("ccaa", "Selecciona comunidad autónoma");
    limpiaCampos("poblacion", "Selecciona población");
    limpiaCampos("provincia", "Selecciona provincia");
    document.getElementById("movil").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("fecha-nacimiento").value = "";
    document.getElementById("departamento").value = "";
    cargaCCAA();
}
