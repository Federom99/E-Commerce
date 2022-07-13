const { Router } = require("express");
const {productosFav} = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.post('/', async(req, res) => {
    const {favorito} = req.body;
    let fav = await productosFav.create({"id": favorito});

    res.status(200).send("Favorito agregado con exito");
})


module.exports = router;