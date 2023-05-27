const express = require("express");
const router = express.Router();
const db = require('./database')

router.get('/', async (req, res) => {
    res.send(
        {
            cursos: await db.query("SELECT * FROM Cursos")
        }
        );
});
module.exports = router;