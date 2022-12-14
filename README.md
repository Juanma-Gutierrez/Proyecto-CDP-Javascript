# Proyecto final de Javascript del Certificado de Profesionalidad de Desarrollo de Aplicaciones Web 馃О

Ejercicio final de Javascript, que debe cubrir las siguientes especificaciones:

-   Separar el c贸digo .html y .css de .js
-   Control de eventos
-   Formularios din谩micos (select din谩micos)
-   Creaci贸n de objetos en el DOM
-   Guardar los datos del formulario con:
    -   localStorage, o
    -   indexedDB
-   Implementar al menos una clase con herencia
-   Modularizar los diferentes archivos .js (separa el c贸digo .js)
-   Usar API Restful (API web) para la inserci贸n aleatoria de datos

## Comenzando 馃殌

Abrir el archivo index.html y autom谩ticamente se pone en marcha la aplicaci贸n en tu navegador.

## Funcionamiento 馃敤

Tenemos dos p谩ginas principales:

-   Alta:
    -   Donde podremos dar de alta a los usuarios.
    -   Los campos CCAA, Provincia y Poblaci贸n son din谩micos, en funci贸n a lo que se vaya escogiendo, se va adaptando el contenido de los siguientes campos.
    -   Existe la opci贸n de cargar datos aleatorios desde una API externa. En ese caso, CCAA pasa a comportarse como Pa铆s, modificando el selector para que deje introducir dicho campo. Lo mismo ocurre con Provincia y Poblaci贸n, que se adaptan para poder registrar los campos importados.


![Imagen de alta de usuarios](https://raw.githubusercontent.com/Juanma-Gutierrez/Proyecto-CDP-Javascript/main/assets/photo01.jpg)

-   Consulta:
    -   Podremos ver un listado con todos los registros.
    -   Tendremos opci贸n de modificar el registro seleccionado pulsando el l谩piz 馃枍.
        -   En ese caso, nos traslada todos los datos del registro a la p谩gina de altas.
    -   Tambi茅n podremos borrar el registro pulsando en la papelera 馃棏.


![Imagen de consulta de usuarios](https://raw.githubusercontent.com/Juanma-Gutierrez/Proyecto-CDP-Javascript/main/assets/photo02.jpg)

Aparte, tendremos opci贸n de seleccionar modo oscuro o modo claro, pulsando en el bot贸n indicado.

![Imagen de modo claro/modo oscuro](https://raw.githubusercontent.com/Juanma-Gutierrez/Proyecto-CDP-Javascript/main/assets/photo03.jpg)

## Formatos:

-   HTML
-   CSS
-   Javascript

## Construido con 馃洜锔?

-   Visual Studio Code

## Autor 鉁掞笍

-   **Juanma Guti茅rrez** - [Juanma-Gutierrez](https://github.com/Juanma-Gutierrez)
