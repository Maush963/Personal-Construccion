

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'league_of_legends',
    password: '',
});

module.exports = pool.promise();

