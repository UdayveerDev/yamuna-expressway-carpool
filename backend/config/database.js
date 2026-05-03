const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',  // Replace with your database username
  host: 'localhost',      // Replace with your database host
  database: 'your_database', // Replace with your database name
  password: 'your_password',  // Replace with your database password
  port: 5432, // Replace with your database port
});

module.exports = pool;