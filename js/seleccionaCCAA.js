"use strict";

/*
 * Limpia los campos ccaa, provincia y población y los carga con los datos de país, población y provincia introducidos en el json
 * @param {tipo(string: json)}
*/
function seleccionaCCAA(json) {
    limpiaCampos("ccaa", json.pais); // limpiamos poblacion
    limpiaCampos("provincia", json.provincia); // limpiamos poblacion
    limpiaCampos("poblacion", json.poblacion); // limpiamos poblacion
}