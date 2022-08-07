"use strict";

/*
 * @ModoOscuro
 * Especifica la clase del modo oscuro
*/
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