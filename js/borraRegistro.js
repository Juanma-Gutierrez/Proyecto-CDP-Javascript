/*
 * Borra el registro indicado por id
 * @param {tipo(number: id)}
*/
function borraRegistro(id){
    requestDB = indexedDB.open(indexedDbName, indexedDbVersion);
    requestDB.onsuccess = function (event) {
        db = event.target.result;
        usersObjectStore = db
            .transaction(indexedDbStorage, "readwrite")
            .objectStore(indexedDbStorage);
        usersObjectStore.delete(id);
    };
}