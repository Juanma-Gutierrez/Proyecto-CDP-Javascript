"use strict";

/*
 * Graba los datos en la bbdd local
 */
function guardarDatos() {
    console.log("Salida:", document.getElementById("provincia"));
    const nombre = document.getElementById("nombre").value;
    const apellido1 = document.getElementById("apellido1").value;
    const apellido2 = document.getElementById("apellido2").value;
    const direccion = document.getElementById("direccion").value;
    var campo_seleccionado = document.getElementById("ccaa");
    const ccaa =
        campo_seleccionado.options[campo_seleccionado.selectedIndex].text;
    var campo_seleccionado = document.getElementById("provincia");
    const provincia =
        campo_seleccionado.options[campo_seleccionado.selectedIndex].text;
    var campo_seleccionado = (campo_seleccionado =
        document.getElementById("poblacion"));
    const poblacion =
        campo_seleccionado.options[campo_seleccionado.selectedIndex].text;
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
        alert("Usuario grabado correctamente.");
        limpiarFicha();
    } else {
        alert(
            "No se puede guardar el usuario sin datos correctamente introducidos."
        );
    }
}
