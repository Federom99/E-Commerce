const { Router } = require("express");
const { Producto } = require("../db.js");

const router = Router();

router.get('/', async(req, res) => {

    const productsSearch = await Producto.findAll();

    console.log(productsSearch)

    let productos = productsSearch.map(p => {
        console.log(p)
        return p.dataValues
    })

    res.send(productos)


})


module.exports = router;
