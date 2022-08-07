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

class Modo {
    constructor() {
        this.estado = "on";
    }
}

class ModoOscuro extends Modo {
    constructor() {
        super();
        this.color1 = "#1e3636";
        this.color2 = "#284747";
        this.color3 = "#2f5151";
        this.color4 = "#dcdcdc";
        this.mensaje = "Modo oscuro";
        this.clase = "fa-solid fa-toggle-on";
    }
}
class ModoClaro extends Modo {
    constructor() {
        super();
        this.color1 = "#cccccc";
        this.color2 = "#dddddd";
        this.color3 = "#eeeeee";
        this.color4 = "#1e3636";
        this.mensaje = "Modo claro";
        this.clase = "fa-solid fa-toggle-off";
    }
}
