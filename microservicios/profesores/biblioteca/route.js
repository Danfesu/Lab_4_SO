const express = require("express");
const router = express.Router();
const db = require('./database')

router.get('/', async (req, res) => {
    console.log("Entro");
    res.send(
        {
            libros: await db.query("SELECT * FROM Profesores")
        }
        );
});
module.exports = router;