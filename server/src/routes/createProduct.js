const { Router } = require("express");
const { Producto, Categoria, Talle, Producto_talle} = require("../db.js");
const {Op, where} = require('sequelize');
const { isAdmin } = require("../controllers/user.controller.js");

const router = Router();

router.post('/', isAdmin, async(req, res) => {
    //Saco la categoría del producto
    const {nombre, precio, categoria, descripcion, imagen, talle, stock} = req.body;
    const productoParaCrear = {nombre, descripcion, imagen, precio};
    try{
        //Creo el producto
        const creado = await Producto.create(productoParaCrear);
        //Busco la categoría correspondiente
        const cat = await Categoria.findOne({where:{"nombre":categoria[0]}});
        //Agrego la categoría
        creado.setCategorium(cat);
        //Agrego talles
        talle.map( async (t, i) => {
            const tall = await  Talle.findOne({where:{"talle":t}});
            const add = await creado.addTalle(tall);
            //Actualizo el stock a el correspondiente
            const updateStock = await Producto_talle.update({stock:stock[i]}, {where:{productoId: creado.dataValues.id, talleId:tall.id}});
        })
        //Envío respuesta
        res.status(200).send("Creado exitosamente");
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})


module.exports = router;
