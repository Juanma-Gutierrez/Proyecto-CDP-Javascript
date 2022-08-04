"use strict";

/*
 * Genera un número aleatorio entre los dos números introducidos
 * @param {tipo(number (inferior, superior))}
 * @return {tipo(number nbr)}
 */
function aleatorio(inferior, superior) {
    return Math.floor(Math.random() * (superior + 1 - inferior) + inferior); // Incluye el rango superior
}
