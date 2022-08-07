"use strict";

/*
 * Activa o desactiva el modo oscuro
 */
function cambiarModo() {
    var root = document.documentElement;
    if (nuevoModo.estado == "on") {
        nuevoModo.estado = "off";
        root.style.setProperty("--oscuro1", nuevoClaro.color1);
        root.style.setProperty("--oscuro2", nuevoClaro.color2);
        root.style.setProperty("--oscuro3", nuevoClaro.color3);
        root.style.setProperty("--claro1", nuevoClaro.color4);
        document.getElementById("dark_mode").innerHTML = nuevoClaro.mensaje;
        document.getElementById("boton_dark_mode").className= nuevoClaro.clase;
    } else {
        nuevoModo.estado = "on";
        root.style.setProperty("--oscuro1", nuevoOscuro.color1);
        root.style.setProperty("--oscuro2", nuevoOscuro.color2);
        root.style.setProperty("--oscuro3", nuevoOscuro.color3);
        root.style.setProperty("--claro1", nuevoOscuro.color4);
        document.getElementById("dark_mode").innerHTML = nuevoOscuro.mensaje;
        document.getElementById("boton_dark_mode").className= nuevoOscuro.clase;
    }
}
