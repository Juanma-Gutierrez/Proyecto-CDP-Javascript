"use strict";

/*
 * Una vez cargada la CCAA, realiza un fetch para cargar las provincias correspondientes
*/
function cargaPoblacion() {
    // Si cambiamos la provincia
    limpiaCampos("poblacion", "Selecciona población"); // limpiamos poblacion
    fetch(
        "https://raw.githubusercontent.com/Juanma-Gutierrez/CCAA-provincias-y-poblaciones-de-Espa-a/master/municipios.json"
    )
        .then((response) => response.json())
        .then(function (data) {
            var select = document.getElementsByName("poblacion")[0];
            var provincia = document.getElementById("provincia").value;
            for (let value in data) {
                const option = document.createElement("option");
                option.value = data[value].CMUN;
                option.text = data[value].NOMBRE;
                if (data[value].CPRO == parseInt(provincia)) {
                    select.appendChild(option);
                }
            }
        })
        .catch((error) => console.error("Error, ha ocurrido: ", error));
}