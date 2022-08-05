"use strict";

/*
 * Limpia los campos ccaa, provincia y población y los carga con los datos de país, población y provincia introducidos en el json
 * @param {tipo(string: json)}
 */
function seleccionaCCAA(json, tipo) {
    if (tipo == "pais") {
        limpiaCampos("ccaa", json.pais); // limpiamos pais
    } else if (tipo == "ccaa") {
        limpiaCampos("ccaa", json.ccaa); // limpiamos ccaa
    }
    limpiaCampos("provincia", json.provincia); // limpiamos provincia
    limpiaCampos("poblacion", json.poblacion); // limpiamos poblacion
}
