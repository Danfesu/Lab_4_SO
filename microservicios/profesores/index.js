const express = require('express');
const mysql = require('mysql');
const { promisify } = require('util');

const API_CONFIG_PUERTO = 0; 


const app = express();
const port = process.env.PORT || 0;

const dbConfig = {
  host: "db4free.net",
  user: "luigicas",
  password: "Hola1234",
  database: "profesores"
};

const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    connection.release();
    console.log('Database connected');
  }
});

pool.query = promisify(pool.query);

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const profesores = await pool.query('SELECT * FROM Profesores');
    res.json(profesores);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Microservicio running on port ${port}`);
});

module.exports = app;

