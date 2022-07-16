const { Router } = require("express");
const {DatosFactura, Pedido} = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.put('/', async(req, res) => {
    const {idPedido, montoTotal, nroOperacion, estado} = req.body;
    let pedido = await Pedido.findOne({where:{id: idPedido}});
    let factura = await pedido.getDatosFactura();
    const montoActualizado = await DatosFactura.update({montoTotal},{where: {id: factura.id}});
    const pedidoActualizado = await Pedido.update({nroOperacion, estado},{where:{id: idPedido}})
    pedido = await Pedido.findOne({where:{id: idPedido}, include: DatosFactura});
    res.send(pedido);
})


module.exports = router;
