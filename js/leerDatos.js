"use strict";

/*
 * Lee los datos de la base de datos para mostrarlos por pantalla
 */
function leerDatos() {
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "Los datos almacenados son: <br />";

    requestDB = indexedDB.open(indexedDbName, indexedDbVersion);
    requestDB.onsuccess = function (event) {
        db = event.target.result;
        usersObjectStore = db
            .transaction(indexedDbStorage, "readonly")
            .objectStore(indexedDbStorage);
        usersObjectStore.getAll().onsuccess = function (event) {
            let usuarios = event.target.result;
            console.log(usuarios);
            usuarios.forEach((element) => {
                // creamos la fila con las celdas correspondientes
                var linea = document.createElement("tr"),
                    campoNombre = document.createElement("td"),
                    campoApellido1 = document.createElement("td"),
                    campoApellido2 = document.createElement("td"),
                    campoDireccion = document.createElement("td"),
                    campoPoblacion = document.createElement("td"),
                    campoProvincia = document.createElement("td"),
                    campoPais = document.createElement("td"),
                    campoTelefono = document.createElement("td"),
                    campoMovil = document.createElement("td"),
                    campoFechaNacimiento = document.createElement("td"),
                    campoDepartamento = document.createElement("td"),
                    campoBorrar = document.createElement("td"),
                    botonBorrar = document.createElement("button"),
                    imagenBorrar = document.createElement("img");

                // rellenamos los datos con el contenido del array
                campoNombre.innerHTML = element.nombre;
                campoApellido1.innerHTML = element.apellido1;
                campoApellido2.innerHTML = element.apellido2;
                campoDireccion.innerHTML = element.direccion;
                campoPoblacion.innerHTML = element.poblacion;
                campoProvincia.innerHTML = element.provincia;
                campoPais.innerHTML = element.pais;
                campoTelefono.innerHTML = element.telefono;
                campoMovil.innerHTML = element.movil;
                campoFechaNacimiento.innerHTML = element.fechaNacimiento;
                campoDepartamento.innerHTML = element.departamento;
                campoNombre.innerHTML = element.nombre;
                campoNombre.innerHTML = element.nombre;
                campoClave.innerHTML = element.clave;
                campoTlf.innerHTML = element.tlf;

                botonBorrar.textContent = "Borrar"; // etiqueto el botón
                botonBorrar.className = "borrar"; // asigno el botón a una clase
                botonBorrar.addEventListener("click", function () {
                    // añado al botón un evento de escucha (listener)
                    borrarDatos(element.id); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                });

                imagenBorrar.src = "./delete.svg"; // añado al botón una imagen
                imagenBorrar.width = "22"; // añado al botón los estilos
                imagenBorrar.height = "22";
                imagenBorrar.style = "vertical-align: middle";

                botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
                campoBorrar.appendChild(botonBorrar); // añado el botón a la celda

                linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
                linea.appendChild(campoClave); // añado a la línea la celda con la clave
                linea.appendChild(campoTlf); // añado a la línea la celda con el tlf
                linea.appendChild(campoBorrar); // añado a la línea la celda con el botón

                cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
            });
        };
    };
}
