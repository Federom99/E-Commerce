const { Router } = require("express");
const {Categoria} = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.get('/', async(req, res) => {
    let cats = await Categoria.findAll();
    categorias = [];
    cats.map((c) => {
        if(!categorias.includes(c.nombre)){
            categorias.push(c.nombre);
        }
    })
    res.status(200).send(categorias);
})


module.exports = router;
