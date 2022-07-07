const { Router } = require("express");
const {Categoria} = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.post('/', async(req, res) => {
    const categorias = ["REMERA", "CAMISA", "PANTALON", "CALZADO", "ABRIGO", "ACCESORIO"];
    categorias.map(async (c)=> {
        let cat = await Categoria.create({"nombre": c});
    })
    res.status(200).send("Categorías añadidas con exito");
})


module.exports = router;
