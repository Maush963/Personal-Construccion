const express = require('express');
const router = express.Router();
const { calcularPromedio, esPrimo } = require('../utils');
const path = require('path');

// Ruta de inicio
router.get('/', (req, res) => { 
    res.send(`
      ${header}
      <h1>Hola mundo!</h1>
    `);
  });


// Ruta para con EJS
router.get('/una-ruta', (request, response, next) => {
    const valor = 'VALOR DE EJEMPLOOOOOOO';
  response.render('prueba', {variable: valor});
});

  // Ruta para calcular el promedio
  router.get('/promedio', (req, res) => {
    const numeros = [1, 2, 3, 4, 5];
    const promedio = calcularPromedio(numeros);
    res.send(`
      ${header}
      <h1>El promedio de los números es: ${promedio}</h1>
    `);
  });



  // Ruta para determinar si un número es primo
  router.get('/primo', (req, res) => {
    const numero = 13;
    const mensaje = esPrimo(numero) ? `El número ${numero} es primo` : `El número ${numero} no es primo`;
    res.send(`
      ${header}
      <h1>${mensaje}</h1>
    `);
  });

  
  // Ruta para mostrar formulario de creación de clase
  router.get('/crear', (req, res) => {
    res.send(`
      ${header}
      <h2 class="title">Crear una nueva clase</h2>
      <form action="/modulo/crear" method="post">
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
  });
  
  // Ruta para procesar el formulario de creación de clase
  router.post('/crear', (req, res) => {
    const { clase, vida, ataque, imagen } = req.body;
    res.send(`
      ${header}
      <h1>¡La clase ${clase} ha sido creada exitosamente!</h1>
      <p>Vida: ${vida}</p>
      <p>Ataque: ${ataque}</p>
      <p>Imagen: ${imagen}</p>
    `);
  });
  
  // Manejador para rutas no encontradas
  router.use((req, res) => {
    res.status(404).send('<h1>Error 404: No se encontró la ruta</h1>');
  });

  module.exports = router;
