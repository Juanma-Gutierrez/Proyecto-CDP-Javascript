# Proyecto final de Javascript del Certificado de Profesionalidad de Desarrollo de Aplicaciones Web 🧰

Ejercicio final de Javascript, que debe cubrir las siguientes especificaciones:

-   Separar el código .html y .css de .js
-   Control de eventos
-   Formularios dinámicos (select dinámicos)
-   Creación de objetos en el DOM
-   Guardar los datos del formulario con:
    -   localStorage, o
    -   indexedDB
-   Implementar al menos una clase con herencia
-   Modularizar los diferentes archivos .js (separa el código .js)
-   Usar API Restful (API web) para la inserción aleatoria de datos

## Comenzando 🚀

Abrir el archivo index.html y automáticamente se pone en marcha la aplicación en tu navegador.

## Funcionamiento 🔨

Tenemos dos páginas principales:

-   Alta:
    -   Donde podremos dar de alta a los usuarios.
    -   Los campos CCAA, Provincia y Población son dinámicos, en función a lo que se vaya escogiendo, se va adaptando el contenido de los siguientes campos.
    -   Existe la opción de cargar datos aleatorios desde una API externa. En ese caso, CCAA pasa a comportarse como País, modificando el selector para que deje introducir dicho campo. Lo mismo ocurre con Provincia y Población, que se adaptan para poder registrar los campos importados.


![Imagen de alta de usuarios](https://raw.githubusercontent.com/Juanma-Gutierrez/Proyecto-CDP-Javascript/main/assets/photo01.jpg)

-   Consulta:
    -   Podremos ver un listado con todos los registros.
    -   Tendremos opción de modificar el registro seleccionado pulsando el lápiz 🖍.
        -   En ese caso, nos traslada todos los datos del registro a la página de altas.
    -   También podremos borrar el registro pulsando en la papelera 🗑.


![Imagen de consulta de usuarios](https://raw.githubusercontent.com/Juanma-Gutierrez/Proyecto-CDP-Javascript/main/assets/photo02.jpg)

Aparte, tendremos opción de seleccionar modo oscuro o modo claro, pulsando en el botón indicado.

![Imagen de modo claro/modo oscuro](https://raw.githubusercontent.com/Juanma-Gutierrez/Proyecto-CDP-Javascript/main/assets/photo03.jpg)

## Formatos:

-   HTML
-   CSS
-   Javascript

## Construido con 🛠️

-   Visual Studio Code

## Autor ✒️

-   **Juanma Gutiérrez** - [Juanma-Gutierrez](https://github.com/Juanma-Gutierrez)
