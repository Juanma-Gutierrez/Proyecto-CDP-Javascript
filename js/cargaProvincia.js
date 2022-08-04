"use strict";

/*
 * Una vez cargada la provincia, realiza un fetch para cargar las poblaciones correspondientes
*/
function cargaProvincia() {
    // Si cambiamos la CCAA
    limpiaCampos("provincia", "Selecciona provincia"); // Limpiamos provincia
    limpiaCampos("poblacion", "Selecciona población"); // limpiamos poblacion
    // realizamos el fetch de provincias
    fetch(
        "https://raw.githubusercontent.com/Juanma-Gutierrez/CCAA-provincias-y-poblaciones-de-Espa-a/master/provincias.json"
    )
        .then((response) => response.json())
        .then(function (data) {
            var select = document.getElementsByName("provincia")[0];
            var comunidad = document.getElementById("ccaa").value; // capturamos el valor de ccaa
            for (let value in data) {
                const option = document.createElement("option"); // creamos option
                option.value = data[value].CPRO; //capturamos el valor cpro
                option.text = data[value].Provincia; // capturamos el nombre
                if (data[value].CODAUTO == parseInt(comunidad)) {
                    // si corresponde la comunidad (hay que parsear porque viene en formato texto)
                    select.appendChild(option); // si se cumple, añadimos la opción al listado select
                }
            }
        })
        .catch((error) => console.error("Error, ha ocurrido: ", error));
}
