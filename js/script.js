"use strict";

var requestDB, db, usersObjectStore;
var indexedDbName = "ACCESO";
var indexedDbVersion = 1;
var indexedDbStorage = "Usuario";

window.onload = function () {
    creaBBDD();
    creaEventListers();
    ocultaTodo();
    cargaCCAA();
};