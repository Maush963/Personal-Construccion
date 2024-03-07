const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const misRutas = require('./routes/clases.routes');
app.use('/', misRutas);

app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
