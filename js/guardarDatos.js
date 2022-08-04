"use strict";

/*
 * Graba los datos en la bbdd local
 */
function guardarDatos() {
    const nombre = document.getElementById("nombre").value;
    const apellido1 = document.getElementById("apellido1").value;
    const apellido2 = document.getElementById("apellido2").value;
    const direccion = document.getElementById("direccion").value;
    const ccaa = document.getElementById("ccaa").value;
    const provincia = document.getElementById("provincia").value;
    const poblacion = document.getElementById("poblacion").value;
    const movil = document.getElementById("movil").value;
    const telefono = document.getElementById("telefono").value;
    const fecha_nacimiento = document.getElementById("fecha-nacimiento").value;
    const departamento = document.getElementById("departamento").value;

    if (nombre != "" && apellido1 != "" && apellido2 != "") {
        requestDB = indexedDB.open(indexedDbName, indexedDbVersion);
        requestDB.onsuccess = function (event) {
            db = event.target.result;
            usersObjectStore = db
                .transaction(indexedDbStorage, "readwrite")
                .objectStore(indexedDbStorage);
            usersObjectStore.put({
                nombre,
                apellido1,
                apellido2,
                direccion,
                ccaa,
                provincia,
                poblacion,
                movil,
                telefono,
                fecha_nacimiento,
                departamento,
            });
        };
        alert("Usuario grabado correctamente.")
        borrarTodo();
    }
    else{
        alert ("No se puede guardar el usuario sin datos correctamente introducidos.")
    }
}
