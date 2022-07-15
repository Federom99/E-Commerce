const { Router } = require("express");
const {Usuario, Producto, Talle, Compra, Producto_talle } = require("../db.js");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const decode = await promisify(jwt.verify)(
      req.cookies.jwt,
      process.env.JWT_SECRET
    );
    const { id } = decode;

    const user = await Usuario.findByPk(id);

    const { productos, direccion_de_envio } = req.body;

    let total = 0

    for(let i = 0; i < productos.length; i++){
      const productoTalle = await Producto.findOne({
        where: {
          id: productos[i].productId,
        },
        include: {
          model: Talle,
          where: {
            id: productos[i].talleId,
          }
        }
      });

      //Me fijo si encontré un producto que requeria esa y que tenga stock. Si no lo hago en algún caso, devuelvo un error.
      if(!productoTalle || (productoTalle.talles[0].stock - productos[i].cantidad) < 0) return res.status(400).send({Error: "Hubo un error. Porfavor, inténtelo de vuelta."})
      //Sumo el total del precio
      total += productos[i].cantidad * productoTalle.precio
    }


    const pedido = await user.createPedido({
      pago_total: total,
      //Si me pasan direccion de envio la pongo, si no uso la del user.
      direccion_de_envio: direccion_de_envio
        ? direccion_de_envio
        : user.direccion,
      //Suponemos que esto se crea justo despues de la pasarela de pago, por lo que estaría aprobado.
      estado: "Aprobado",
    });

    //Creo una compra por cada producto
    for(let i = 0; i < productos.length; i++){
      await Compra.create({
        productoId: productos[i].productId,
        talleId: productos[i].talleId,
        cantidad: productos[i].cantidad,
        pedidoId: pedido.dataValues.id
      })


      //Resto el stock
       const productoTalle = await Producto_talle.findOne({where: {
          productoId: productos[i].productId,
          talleId: productos[i].talleId
        }
      });

      await productoTalle.update({
        stock: productoTalle.dataValues.stock - productos[i].cantidad
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
