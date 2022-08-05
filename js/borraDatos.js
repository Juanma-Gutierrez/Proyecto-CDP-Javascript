"use strict";

/*
 * Elimina el registro seleccionado
 * @param {tipo(string id)}
 */
function borraDatos(id) {
    var respuesta = alerta();
    if (respuesta == 1) {
        borraRegistro(id);
    } else {
        alert("Se ha cancelado el borrado del registro");
    }
    leerDatos();
}

/*
 * Confirmación de la eliminación del registro seleccionado
 * @param {tipo(string id)}
 */
function alerta() {
    var opcion = confirm("¿Deseas eliminar el registro seleccionado?");
    if (opcion == true) {
        return 1;
    } else {
        return 0;
    }
}
