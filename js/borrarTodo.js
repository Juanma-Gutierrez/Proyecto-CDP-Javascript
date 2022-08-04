"use strict";

function borrarTodo(){
    document.getElementById("nombre").value="";
    document.getElementById("apellido1").value="";
    document.getElementById("apellido2").value="";
    document.getElementById("direccion").value="";
    limpiaCampos("ccaa", "Seleciona comunidad autónoma"); // limpiamos poblacion
    limpiaCampos("poblacion", "Selecciona población"); // limpiamos poblacion
    limpiaCampos("provincia", "Selecciona provincia"); // limpiamos poblacion
    document.getElementById("movil").value="";
    document.getElementById("telefono").value="";
    document.getElementById("fecha-nacimiento").value="";
    document.getElementById("departamento").value="";
    cargaCCAA();
}