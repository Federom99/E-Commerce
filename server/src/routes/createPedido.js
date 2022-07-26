const { Router } = require("express");
const {Usuario, Producto, Talle, Compra, Producto_talle } = require("../db.js");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../controllers/user.controller.js");
const router = Router();
const queue = require('express-queue');

router.post("/", isAuthenticated, queue({ activeLimit: 1, queuedLimit: -1}), async (req, res) => {
  try {
    const decode = await promisify(jwt.verify)(
      req.cookies.jwt,
      process.env.JWT_SECRET
    );
    const { id } = decode;

    const user = await Usuario.findByPk(id);

    let { productos, comprador, direccion_de_envio, tipoDeEnvio } = req.body;

    if(!direccion_de_envio){
      direccion_de_envio = {direccion: comprador.direccion + " - " + comprador.provincia, CP: comprador.codigoPostal};
    }

    console.log(req.body);

    let total = 0

    for(let i = 0; i < productos.length; i++){
      const productoTalle = await Producto.findOne({
        where: {
          id: productos[i].productId,
        },
        include: {
          model: Talle,
          where: {
            talle: productos[i].talle,
          }
        }
      });
      //Me fijo si encontré un producto que requeria esa y que tenga stock. Si no lo hago en algún caso, devuelvo un error.
      if(!productoTalle || (productoTalle.talles[0].dataValues.producto_talle.dataValues.stock - productos[i].cantidad) < 0) 
        return res.status(400).send({Error: "Lo sentimos. El producto seleccionado está agotado."})
      //Sumo el total del precio
      total += productos[i].cantidad * productoTalle.precio
    }

    const pedido = await user.createPedido({
      pago_total: total,
      //Si me pasan direccion de envio la pongo, si no uso la del user.
      direccion_de_envio: direccion_de_envio,
      //Suponemos que esto se crea justo despues de la pasarela de pago, por lo que estaría aprobado.
      estado: "Pendiente de pago",
      //tipo de envio
      tipo_de_envio: comprador.tipoDeEnvio
    });

    //Creo una compra por cada producto
    for(let i = 0; i < productos.length; i++){
      const talle = await Talle.findOne({where: {talle: productos[i].talle}})
      await Compra.create({
        productoId: productos[i].productId,
        talleId: talle.id,
        cantidad: productos[i].cantidad,
        pedidoId: pedido.dataValues.id
      })
    }

    //Busco todas las compras donde el id del pedido sea el que acabo de crear y despues lo mando junto al pedido.
    const compras = await Compra.findAll({
      where: {
        pedidoId: pedido.dataValues.id
      }
    })

    res.status(200).send({pedido: pedido, compras: compras});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;