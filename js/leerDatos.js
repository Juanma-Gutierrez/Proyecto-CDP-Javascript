"use strict";

/*
 * Lee los datos de la base de datos para mostrarlos por pantalla
 */
function leerDatos() {
    limpiaDatos();
    const cuerpo = document.getElementById("cuerpo");
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
                    campoCCAA = document.createElement("td"),
                    campoTelefono = document.createElement("td"),
                    campoMovil = document.createElement("td"),
                    campoFechaNacimiento = document.createElement("td"),
                    campoDepartamento = document.createElement("td"),
                    campoEditar = document.createElement("td"),
                    botonEditar = document.createElement("button"),
                    imagenEditar = document.createElement("img"),
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
                campoCCAA.innerHTML = element.ccaa;
                campoTelefono.innerHTML = element.telefono;
                campoMovil.innerHTML = element.movil;
                campoFechaNacimiento.innerHTML = element.fecha_nacimiento;
                campoDepartamento.innerHTML = element.departamento;

                botonEditar.className = "editar"; // asigno el botón a una clase
                botonEditar.addEventListener("click", function () {
                    // añado al botón un evento de escucha (listener)
                    editarDatos(element); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de editar
                });
                botonBorrar.className = "borrar"; // asigno el botón a una clase
                botonBorrar.addEventListener("click", function () {
                    // añado al botón un evento de escucha (listener)
                    borrarDatos(element.id); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                });
                imagenEditar.src = "./images/pencil-solid.svg"; // añado al botón una imagen
                imagenEditar.width = "22"; // añado al botón los estilos
                imagenEditar.height = "22";

                imagenEditar.style = "vertical-align: middle; padding:3px;";

                botonEditar.appendChild(imagenEditar); // añado la imagen al botón
                campoEditar.appendChild(botonEditar); // añado el botón a la celda
                imagenBorrar.src = "./images/trash-solid.svg"; // añado al botón una imagen
                imagenBorrar.width = "22"; // añado al botón los estilos
                imagenBorrar.height = "22";

                imagenBorrar.style = "vertical-align: middle; padding:3px;";

                botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
                campoBorrar.appendChild(botonBorrar); // añado el botón a la celda

                linea.appendChild(campoNombre);
                linea.appendChild(campoApellido1);
                linea.appendChild(campoApellido2);
                linea.appendChild(campoDireccion);
                linea.appendChild(campoPoblacion);
                linea.appendChild(campoProvincia);
                linea.appendChild(campoCCAA);
                linea.appendChild(campoMovil);
                linea.appendChild(campoTelefono);
                linea.appendChild(campoFechaNacimiento);
                linea.appendChild(campoDepartamento);
                linea.appendChild(botonEditar)
                linea.appendChild(botonBorrar)

                cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
            });
        };
    };
}
