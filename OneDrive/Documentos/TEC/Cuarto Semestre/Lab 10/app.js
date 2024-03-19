//Express
const express = require('express');
const app = express();

//Session
const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en'qasedxrcftgvyhbnjhmkiihjbgytfvrdeswaqz cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


//Body-parser
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Protection against CSRF
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection);

//csrf token
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

//cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

//Routes
const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);

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
    res.render('404', { username: req.session.username || "" });
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
