// utils.js

function calcularPromedio(numeros) {
    // Validar que el argumento sea un arreglo
    if (!Array.isArray(numeros)) {
      throw new Error('El argumento debe ser un arreglo de números');
    }
  
    // Sumar todos los elementos del arreglo
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  
    // Calcular el promedio dividiendo la suma por la cantidad de elementos
    const promedio = suma / numeros.length;
  
    // Retornar el valor del promedio
    return promedio;
  }
  
  function esPrimo(numero) {
    // Validar que el número sea un entero positivo
    if (!Number.isInteger(numero) || numero <= 1) {
      return false;
    }
  
    // Recorrer los números desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      // Si el número es divisible por otro número, no es primo
      if (numero % i === 0) {
        return false;
      }
    }
  
    // Si el número no es divisible por ningún otro número, es primo
    return true;
  }
  
  module.exports = { calcularPromedio, esPrimo };
  