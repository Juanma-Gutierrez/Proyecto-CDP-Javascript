"use strict";

/*
 * Elimina el registro seleccionado
 * @param {tipo(string id)}
 */
function borrarDatos(id) {
    requestDB = indexedDB.open(indexedDbName, indexedDbVersion);
    requestDB.onsuccess = function (event) {
        db = event.target.result;
        usersObjectStore = db
            .transaction(indexedDbStorage, "readwrite")
            .objectStore(indexedDbStorage);
        var respuesta = alerta(id);
        if ((respuesta == 1)) {
            usersObjectStore.delete(id);
        } else {
            alert("Se ha cancelado el borrado del registro");
        }
    };
    leerDatos();
}

function alerta(id) {
    var mensaje;
    var opcion = confirm("¿Deseas eliminar el registro seleccionado?");
    if (opcion == true) {
        return 1;
    } else {
        return 0;
    }
}
