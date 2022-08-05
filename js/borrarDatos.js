"use strict";

/*
 * Elimina el registro seleccionado
 * @param {tipo(string id)}
*/
function borrarDatos(id) {
    requestDB = indexedDB.open(indexedDbName, indexedDbVersion);
    requestDB.onsuccess = function (event) {
        db = event.target.result;
        usersObjectStore = db.transaction(indexedDbStorage, "readwrite").objectStore(indexedDbStorage);
        usersObjectStore.delete(id);
    };
    leerDatos();
}