const express = require('express');
const app = express();
const misRutas = require('./routes/clases.routes.js');
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', misRutas);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.listen(3000);
console.log('Server on port 3000');