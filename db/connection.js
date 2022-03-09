const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySql username
        user: 'root',
        // your MySql password
        password: 'scrumleader2',
        database: 'election'
    },
);

module.exports = db;