const { Router } = require("express");
const {DatosFactura, Pedido, Compra, Producto_talle} = require("../db.js");
const {Op} = require('sequelize')
const queue = require('express-queue');


const router = Router();

router.put('/', queue({ activeLimit: 1, queuedLimit: -1}), async(req, res) => {
    try{
        const {idPedido, montoTotal, nroOperacion, estado} = req.body;
        let pedido = await Pedido.findOne({where:{id: idPedido}});
        let factura = await pedido.getDatosFactura();

        if(estado === 'Aprobado' && pedido.dataValues.estado === 'Pendiente de pago'){
            const compras = await Compra.findAll({
                where: {
                  pedidoId: idPedido,
                  done: false
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

                await compras[i].update({done: true})
              }
        }

        const montoActualizado = await DatosFactura.update({montoTotal},{where: {id: factura.id}});
        const pedidoActualizado = await Pedido.update({nroOperacion, estado},{where:{id: idPedido}})
        pedido = await Pedido.findOne({where:{id: idPedido}, include: DatosFactura});

        res.send(pedido);
    }catch(e){
        console.log(e)
    }
})


module.exports = router;
