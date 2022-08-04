function cargaPaises() {
    //    limpiaCampos("bl2provincia", "Selecciona provincia"); // limpiamos provincia
    //    limpiaCampos("bl2poblacion", "Selecciona población"); // limpiamos poblacion
    // realizamos el fetch de CCAA
    fetch(
        "https://raw.githubusercontent.com/Juanma-Gutierrez/CCAA-provincias-y-poblaciones-de-Espa-a/master/paises.json"
    )
        .then((response) => response.json())
        .then(function (data) {
            var select = document.getElementById("pais");
            console.log(data);
            for (let value in data) {
                const option = document.createElement("option");
                option.value = data[value].name_es;
                option.text = data[value].name_es;
                select.add(option);
            }
            var select = document.getElementsByClassName("pais");
        })
        .catch((error) => console.error("Error, ha ocurrido: ", error));
}
