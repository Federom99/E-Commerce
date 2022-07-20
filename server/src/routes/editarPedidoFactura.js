const { Router } = require("express");
const {DatosFactura, Pedido, Compras, Producto_talle} = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.put('/', async(req, res) => {
    try{
        const {idPedido, montoTotal, nroOperacion, estado} = req.body;
        let pedido = await Pedido.findOne({where:{id: idPedido}});
        let factura = await pedido.getDatosFactura();
        const montoActualizado = await DatosFactura.update({montoTotal},{where: {id: factura.id}});
        const pedidoActualizado = await Pedido.update({nroOperacion, estado},{where:{id: idPedido}})
        pedido = await Pedido.findOne({where:{id: idPedido}, include: DatosFactura});

        if(estado === 'approved'){
            const compras = await Compras.findAll({
                where: {
                  pedidoId: idPedido
                }
              })
            for(let i = 0; i < compras.length; i++){
                //Resto el stock
                 const productoTalle = await Producto_talle.findOne({where: {
                    productoId: compras[i].dataValues.productoId,
                    talleId: compras[i].dataValues.talleId
                  }
                });
          
                await productoTalle.update({
                  stock: productoTalle.dataValues.stock - compras[i].dataValues.cantidad
                })
          
              }
        }

        res.send(pedido);
    }catch(e){}
})


module.exports = router;
