const { Router } = require("express");
const {Categoria} = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.post('/', async(req, res) => {
    const {categoria} = req.body;
    let cat = await Categoria.create({"nombre": categoria});

    res.status(200).send("Categoría añadida con exito");
})


module.exports = router;
