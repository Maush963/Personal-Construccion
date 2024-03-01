const http = require('http');
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

// Definir el encabezado común
const header = `
  <html>
    <head>
      <title>Mi Aplicación Web</title>
    </head>
    <body>
      <header>
        <h1>Mi Aplicación Web</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/promedio">Promedio</a></li>
            <li><a href="/primo">Primo</a></li>
            <li><a href="/crear">Crear Clase</a></li>
          </ul>
        </nav>
      </header>
`;

// Crear un servidor web
const server = http.createServer((request, response) => {
  const ruta = request.url;

    // Configurar la cabecera Content-Type con la codificación UTF-8
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    
//   Creamos un servidor web que responda a las siguientes rutas:
// /: Retorna un mensaje de bienvenida
  if (ruta === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`
      ${header}
      <h1>Hola mundo!</h1>
    `);
    response.end();
// /promedio: Retorna el promedio de los números 1, 2, 3, 4 y 5
  } else if (ruta === '/promedio') {
    const numeros = [1, 2, 3, 4, 5];
    const promedio = calcularPromedio(numeros);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`
      ${header}
      <h1>El promedio de los números es: ${promedio}</h1>
    `);
    response.end();
    // /primo: Retorna si el número 13 es primo o no
  } else if (ruta === '/primo') {
    const numero = 13;

    if (esPrimo(numero)) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(`
        ${header}
        <h1>El número ${numero} es primo</h1>
      `);
      response.end();
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(`
        ${header}
        <h1>El número ${numero} no es primo</h1>
      `);
      response.end();
    }
  }
    else if (ruta === "/crear" && request.method == "GET") {
      
      response.setHeader('Content-Type', 'text/html');
      response.write(`
        ${header}
        <h2 class="title">Crear una nueva clase</h2>
        <form action="/crear" method="POST">
          <label class="label" for="clase">Clase</label>
          <input class="input text" id="clase" name="clase">
          <label class="label" for="vida">Vida</label>
          <input type="number" value="10" class="input text" id="vida" name="vida">
          <label class="label" for="ataque">Ataque</label>
          <input type="number" value="10" class="input text" id="ataque" name="ataque">
          <label class="label" for="imagen">Imagen</label>
          <input class="input text" id="imagen" name="imagen">
          <br><br>
          <input class="button is-success" type="submit" value="Crear">
        </form>
      `);
      response.end();

    } else if (ruta === "/crear" && request.method == "POST") {
  let datos = '';

  // Manejar los datos recibidos en la solicitud POST
  request.on('data', (chunk) => {
    // Concatenar los chunks de datos recibidos
    datos += chunk;
  });

  // Una vez que se han recibido todos los datos
  request.on('end', () => {
    // Parsear los datos recibidos (en este caso, asumimos que son codificados como query string)
    const parsedData = new URLSearchParams(datos);

    // Obtener los valores de los campos del formulario
    const clase = parsedData.get('clase');
    const vida = parsedData.get('vida');
    const ataque = parsedData.get('ataque');
    const imagen = parsedData.get('imagen');

    // Aquí puedes hacer lo que necesites con los datos recibidos
    // Por ejemplo, podrías guardarlos en una base de datos o realizar alguna acción específica


    // Responder al cliente con un mensaje de confirmación
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`
      ${header}
      <h1>¡La clase ${clase} ha sido creada exitosamente!</h1>
      <p>Vida: ${vida}</p>
      <p>Ataque: ${ataque}</p>
      <p>Imagen: ${imagen}</p>
    `);
    response.end();
  });
}

      // else: Retorna un mensaje de error 404
 else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('<h1>Error 404: No se encontró la ruta</h1>');
    response.end();
  }
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
