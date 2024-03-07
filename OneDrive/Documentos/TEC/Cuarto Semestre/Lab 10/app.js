//Express
const express = require('express');
const app = express();

//Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

//Routes
const misRutas = require('./routes/clases.routes');
app.use('/', misRutas);

//Static files
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


//Middleware
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

//Not found
app.use((req, res, next) => {
    res.status(404);
    res.render('404');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
