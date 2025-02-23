const mysql = require('mysql2/promise');

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',    // Change to your MySQL host
    user: 'root',         // Your MySQL username
    password: 'root', // Your MySQL password
    database: 'lets-learn',  // Your database name
    connectionLimit: 5,   // Adjust based on your needs,
    idleTimeout: 10000
});

module.exports = pool;
