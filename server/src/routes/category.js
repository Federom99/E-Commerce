const { Router } = require("express");
const {Categoria} = require("../db.js");
const {Op} = require('sequelize');
const { isAdmin } = require("../controllers/user.controller.js");

const router = Router();

router.post('/', isAdmin, async(req, res) => {
    const {categoria} = req.body;
    let cat = await Categoria.create({"nombre": categoria});

    res.status(200).send("Categoría añadida con exito");
})


module.exports = router;
