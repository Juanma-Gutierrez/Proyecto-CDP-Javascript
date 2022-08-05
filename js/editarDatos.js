"use strict";

/*
 * Cierra la consulta, pasa los datos a la ficha de alta para modificar el registro
 */
function editarDatos(element){
    borraRegistro(element.id);
    limpiarFicha();
    document.getElementById("nombre").value = element.nombre;
    document.getElementById("apellido1").value = element.apellido1;
    document.getElementById("apellido2").value = element.apellido2;
    document.getElementById("direccion").value = element.direccion;
    seleccionaCCAA(element, "ccaa");
    document.getElementById("ccaa").value = element.ccaa;
    document.getElementById("provincia").value = element.provincia;
    document.getElementById("poblacion").value = element.poblacion;
    document.getElementById("movil").value = element.movil;
    document.getElementById("telefono").value = element.telefono;
    document.getElementById("fecha-nacimiento").value = element.fecha_nacimiento;
    document.getElementById("departamento").value = element.departamento;
    ocultaTodo();
    muestraFichaAlta();
}

