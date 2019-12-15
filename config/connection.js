const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: 'remotemysql.com',
        user: 'TPPgSasn4h',
        password: 'ItBIrxxW9O',
        database: 'TPPgSasn4h'

        // host: 'localhost',
        // user: 'root',
        // password: '',
        // database: 'burgers_db'

    });
}


connection.connect();

module.exports = connection;