const mysql = require('mysql');

const connection ={
    host    : 'localhost',
    user    : 'root',
    password: 'dulce1981',
    database: 'guarderia'
};

const conn = mysql.createConnection(connection);

conn.connect(function (err){
    if(err) throw err;
    console.log('Database is Connected Successfully ');
});

module.exports = conn;
