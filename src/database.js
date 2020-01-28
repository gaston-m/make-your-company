const mysql = require('mysql');
const { URI } = require('./keys');
const { promisify } = require('util');

const pool = mysql.createPool(URI);

pool.getConnection((err, connection) =>{

    if (err){ console.error(err)}
    else if (connection){ 
        connection.release();
        console.log('Mysql is Connected');
    }

});

pool.query = promisify(pool.query);

module.exports = pool;