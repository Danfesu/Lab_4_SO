const express = require("express");
const router = express.Router();
const db = require('./database');
const pool = require("./database");

router.get('/', async (req, res) => {
    res.send(
        {
            estudiantes: await db.query("SELECT * FROM estudiantes")
        }
        );
});
router.post('/crear', async(req, res)=> {
    const { nombre, edad, carrera,email,telefono } = req.body;
    const estudiante = { nombre, edad, carrera,email,telefono};
  
    const query = 'INSERT INTO estudiantes SET ?';
    pool.query(query, estudiante, (error, result) => {
      if (error) {
        res.status(400).json({ error: 'Error al crear el estudiante' });
      } else {
        estudiante.id = result.insertId;
        res.status(201).json(estudiante);
      }
    });
  });
  
module.exports = router;