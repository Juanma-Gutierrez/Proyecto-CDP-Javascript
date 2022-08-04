"use strict";

/*
 * Realiza un fetch para cargar todas las comunidades autónomas
 */
function cargaCCAA() {
    limpiaCampos("provincia", "Selecciona provincia"); // limpiamos provincia
    limpiaCampos("poblacion", "Selecciona población"); // limpiamos poblacion
    // realizamos el fetch de paises
    fetch(
        "https://raw.githubusercontent.com/Juanma-Gutierrez/CCAA-provincias-y-poblaciones-de-Espa-a/master/comunidades.json"
    )
        .then((response) => response.json())
        .then(function (data) {
            var select = document.getElementById("ccaa");
            for (let value in data) {
                const option = document.createElement("option");
                option.value = data[value].Código;
                option.text = data[value].Literal;
                select.add(option);
            }
            var select = document.getElementsByClassName("ccaa");
        })
        .catch((error) => console.error("Error, ha ocurrido: ", error));
}
