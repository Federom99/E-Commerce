const { Router } = require("express");
const { Producto, Categoria, Talle, Producto_talle} = require("../db.js");
const {Op} = require('sequelize');
const { isAdmin } = require("../controllers/user.controller.js");

const router = Router();

router.put('/', isAdmin, async(req, res) => {
    const {id, nombre, precio, categoria, descripcion, imagen, talle, stock} = req.body;
    const productoParaActualizar = {nombre, descripcion, imagen, precio, talle};
    try{
        const prodActualizado = await Producto.update(productoParaActualizar, {where:{"id":id}});
        const prod = await Producto.findByPk(id);
        if(categoria){
            const cat = await Categoria.findOne({where:{"nombre":categoria}});
            prod.setCategorium(cat);
        }
        if(talle){
            const tall = await  Producto_talle.findAll({where:{productoId: prod.dataValues.id}});
            tall.map(async (t) => {await t.destroy()})
            talle.map( async (t, i) => {
                const tall = await  Talle.findOne({where:{"talle":t}});
                const add = await prod.addTalle(tall);
                //Actualizo el stock a el correspondiente
                const updateStock = await Producto_talle.update({stock:stock[i]}, {where:{productoId: prod.dataValues.id, talleId:tall.id}});
            })
            // talle.map( async (t, i) => {
            //     //Actualizo el stock a el correspondiente
            //     // const updateStock = await Producto_talle.update({stock:stock[i]}, {where:{productoId: prod.dataValues.id, talleId:tall.id}});
            // })
        }
        res.status(200).send("Actualizado exitosamente");
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})


module.exports = router;
