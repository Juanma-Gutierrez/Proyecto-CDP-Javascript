"use strict";

/*
 * Carga datos aleatorios en la ficha Alta
 */
function cargaDatosAleatorios() {
    fetch(
        "https://raw.githubusercontent.com/Juanma-Gutierrez/almacen-varios/main/jsonGeneral.json"
    )
        .then((response) => response.json())
        .then(function (json) {
            let usuario = aleatorio(0, json.length);

            document.getElementById("nombre").value = json[usuario].nombre;
            document.getElementById("apellido1").value =
                json[usuario].apellido1;
            document.getElementById("apellido2").value =
                json[usuario].apellido2;
            document.getElementById("direccion").value =
                json[usuario].direccion;

            seleccionaCCAA(json[usuario]);
            document.getElementById("ccaa").value = json[usuario].pais;
            document.getElementById("provincia").value =
                json[usuario].provincia;
            document.getElementById("poblacion").value =
                json[usuario].poblacion;
            document.getElementById("movil").value = json[usuario].movil;
            document.getElementById("telefono").value = json[usuario].telefono;
            // modificamos el formato de la fecha para adaptarlo al input date
            var nuevaFecha = cargaFecha(json[usuario].fecha1);
            document.getElementById("fecha-nacimiento").value = nuevaFecha;
            document.getElementById("departamento").value =
                json[usuario].departamento;
        })
        .catch((error) => console.error("Error, ha ocurrido: ", error));
}

function seleccionaCCAA(json) {
    console.log("poblacion:", json.poblacion);
    console.log("provincia:", json.provincia);
    console.log("pais:", json.pais);
    limpiaCampos("ccaa", json.pais); // limpiamos poblacion
    limpiaCampos("provincia", json.provincia); // limpiamos poblacion
    limpiaCampos("poblacion", json.poblacion); // limpiamos poblacion

    /*     var select = document.getElementById("ccaa");
    var items = select.getElementsByTagName("option");
    var index = Math.floor(Math.random() * items.length);
    console.log("Salida:", items[index]);
    items[index].setAttribute("selected", true); 
    console.log("Salida:", select);
/*  select.value = "1";
    select.text = "Andalucía"; 
    select.option.selected = "selected";
    select.option.item(index).value = items[index].value;
    select.option.item(index).text = items[index].text;
    select.option.item(index).selected = "selected"; */
    // cargaProvincia();
}

/*
 * Modifica el formato de la fecha para pasar de formato dd/mm/aa a yyyy-mm-dd
 * @param {tipo(string "dd/mm/yy")}
 * @return {tipo(string "yy-mm-dd")}
 */
function cargaFecha(fecha) {
    var dd = fecha.slice(0, 2);
    var mm = fecha.slice(3, 5);
    var yy = fecha.slice(6, 10);
    return yy + "-" + mm + "-" + dd;
}
