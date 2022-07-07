const { Router } = require("express");
const { Producto, Categoria} = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.post('/', async(req, res) => {
    //Saco la categoría del producto
    const {categoria} = req.body;
    try{
        //Creo el producto
        const creado = await Producto.create(req.body);
        //Busco la categoría correspondiente
        const cat = await Categoria.findOne({where:{"nombre":categoria}});
        //Agrego la categoría
        creado.setCategorium(cat);
        //Envío respuesta
        res.status(200).send("Creado exitosamente");
    }catch(e){
        res.status(400).send(e);
    }
})


module.exports = router;
