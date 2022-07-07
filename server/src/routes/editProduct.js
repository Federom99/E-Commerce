const { Router } = require("express");
const { Producto, Categoria} = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.put('/', async(req, res) => {
    const {id, categoria} = req.body;
    try{
        const prodActualizado = await Producto.update(req.body, {where:{"id":id}});
        if(categoria){
            const prod = await Producto.findByPk(id);
            const cat = await Categoria.findOne({where:{"nombre":categoria}});
            prod.setCategorium(cat);
        }
        res.status(200).send("Actualizado exitosamente");
    }catch(e){
        res.status(400).send(e);
    }
})


module.exports = router;
