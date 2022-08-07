"use strict";

var requestDB, db, usersObjectStore;
var indexedDbName = "ACCESO";
var indexedDbVersion = 1;
var indexedDbStorage = "Usuario";

window.onload = function () {
    window.nuevoModo = new Modo();
    window.nuevoOscuro = new ModoOscuro();
    window.nuevoClaro = new ModoClaro();
    creaBBDD();
    creaEventListers();
    ocultaTodo();
    cargaCCAA();
};