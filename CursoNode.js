//Ejemplo 1: Crear un servidor web con Express.js
/*
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.sendFile('./index.html',{
        root : __dirname //__dirname es una variable global que nos da la ruta del directorio actual
    });
});


app.listen(3000);
console.log('Server on port ${3000}');
*/


/* RUTAS */
/*
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/weather', (req, res) => {
    res.send('The current weather is nice.');
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(3000);
console.log('Server on port 3000');
*/

/* MÉTODOS HTTP 
const express = require('express');

const app = express();

app.get ('/products', (req, res) => {
    
    //Aqui puedo validar datos
    //Consultar base de datos
    //Procesar datos
    
    res.send ('products list')
});

app.post ('/products', (req, res) => {
    res.send ('creating product')
});

app.put ('/products', (req, res) => {
    res.send ('updating product')
});

app.delete ('/products', (req, res) => {
    res.send ('deliting product')
});

app.patch ('/products', (req, res) => {
    res.send ('updating a part of the product')
});

app.listen(3000);
console.log('Server on port 3000');
*/


/* Distintos tipos de respuesta 
const express = require('express');
const app = express();

app.get ('/', (req, res) => {
    res.send ('Hello World!')
});

app.get ('/miarchivo', (req, res) => {
    res.sendFile('./prueba.png', {
        root : __dirname
    });
});

app.get ('/user', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    })
});

app.listen(3000);
console.log('Server on port 3000');
*/


/* Recibir datos del cliente
const express = require('express');

const app = express();
//colocarlos antes de la ruta para que express los pueda interpretar
app.use(express.text());
app.use(express.json());
//urlencoded es para recibir datos de formularios
app.use(express.urlencoded({extended: false}));

app.post ('/user', (req, res) => {
    console.log(req.body)
    res.send ('creating user')
});

app.listen(3000);
console.log('Server on port 3000');
*/
/* Params*/
const express = require('express');
const app = express();

app.get('/hello/:user', (req, res) => {
    console.log(req.params.user);
    res.send('Hello ' + req.params.user);
});

app.listen(3000);
console.log('Server on port 3000');
