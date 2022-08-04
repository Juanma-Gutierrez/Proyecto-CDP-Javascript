'use strict';

var requestDB, db, usersObjectStore;
var indexedDbName = "ACCESO";
var indexedDbVersion = 1;
var indexedDbStorage = "Usuario";

window.onload = function () {
    requestDB = indexedDB.open(indexedDbName, indexedDbVersion); // SI EXISTE LA ABRE, SI NO LA CREA
    requestDB.onupgradeneeded = function (event) {
        db = event.target.result;
        var objectStore = db.createObjectStore(indexedDbStorage, { keyPath: "id", autoIncrement: true });
        objectStore.createIndex("nombre_index", "nombre", { unique: false });
        objectStore.createIndex("apellido1_index", "apellido1", { unique: false });
        objectStore.createIndex("apellido2_index", "apellido2", { unique: false });
        objectStore.createIndex("direccion_index", "direccion", { unique: false });
        objectStore.createIndex("poblacion_index", "poblacion", { unique: false });
        objectStore.createIndex("provincia_index", "provincia", { unique: false });
        objectStore.createIndex("pais_index", "pais", { unique: false });
        objectStore.createIndex("telefono_index", "tfn", { unique: false });
        objectStore.createIndex("movil_index", "movil", { unique: false });
        objectStore.createIndex("fecha_nacimiento_index", "fnac", { unique: false });
        objectStore.createIndex("departamento_index", "departamento", { unique: false });

    };
    document.getElementById("menu-alta").addEventListener("click", muestraFichaAlta);
    document.getElementById("menu-modi").addEventListener("click", muestraFichaModi);
    document.getElementById("menu-cons").addEventListener("click", muestraFichaCons);
    document.getElementById("menu-baja").addEventListener("click", muestraFichaBaja);
 /*   document.getElementById("guardar").addEventListener("click", grabarDatos); 
    leerDatos();*/
    ocultaTodo();
    cargaPaises();
};