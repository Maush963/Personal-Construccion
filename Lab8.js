filesystem = require("fs");



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


const numeros = [1, 2, 3, 4, 5];

const promedio = calcularPromedio(numeros);

console.log(`El promedio de los números es: ${promedio}`);



const escribirArchivo = (ruta, contenido) =>{
  filesystem.writeFileSync(ruta, contenido);
}

// Ejemplo de uso
const ruta = './archivo.txt';
const contenido = 'Hola mundo!';

escribirArchivo(ruta, contenido);


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

// Ejemplo de uso
const numero = 13;

if (esPrimo(numero)) {
  console.log('El número', numero, 'es primo');
} else {
  console.log('El número', numero, 'no es primo');
}

// Crear el servidor HTTP
const http = require('http');
const server = http.createServer((request, response) => {
  // Ruta para la raíz '/'
  if (request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hola mundo!</h1>');
    response.end();
  }

  // Ruta para '/promedio'
  if (request.url === '/promedio') {
    const numeros = [1, 2, 3, 4, 5];
    const promedio = calcularPromedio(numeros);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<h1>El promedio de los números es: ${promedio}</h1>`);
    response.end();
  }

  // Ruta para '/primo'
  if (request.url === '/primo') {
    const numero = 13;

    if (esPrimo(numero)) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(`<h1>El número ${numero} es primo</h1>`);
      response.end();
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(`<h1>El número ${numero} no es primo</h1>`);
      response.end();
    }
  }
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
