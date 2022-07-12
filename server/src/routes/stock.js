const { Router } = require("express");
const {Producto_talle, Talle} = require("../db");
const router = Router();

router.put('/:productId', async(req, res) => {

    const {productId} = req.params

    const {talle, stock} = req.body

    try{
        //Busco el talle en la db por nombre
        const talleInDb = await Talle.findOne({where: {talle: talle}})
        const talleId = talleInDb.dataValues.id

        //Actualizo el stock de la prenda de ese talle segun lo que me pasen por el body
        await Producto_talle.update({stock: stock}, {
            where: {
                productoId: productId,
                talleId: talleId
            }
        })

        //Busco el stock updateado
        const updatedStock = await Producto_talle.findOne({where: {productoId: productId, talleId: talleId}})

        //Mando el stock updateado
        res.send(updatedStock)
    }catch(e){
        res.send(e)
    }

})


module.exports = router;
