"use strict";

/*
 * @ModoClaro
 * Especifica la clase del modo claro
*/
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
