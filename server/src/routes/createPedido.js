const { Router } = require("express");
const { Pedido, Compra } = require("../db.js");

const router = Router();

// POST crear pedido

router.post("/:idUsuario", async (req, res) => {
  try {
    const idUser = req.params.idUsuario;
    const {
      fecha,
      pago_total,
      direccion_de_envio,
      estado,
      idProductos,
    } = req.body;
    const pedido = await Pedido.create({
      fecha: fecha,
      pago_total: pago_total,
      direccion_de_envio: direccion_de_envio,
      estado: estado,
    });
    await idProductos.map((p) => {
      Compra.create({
        cantidad: p.cantidad,
        productoId: p.id,
        pedidoId: pedido.id,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          return res.status(400).json(error); // de la linea 30 a la 37, es para ver la respuesta y el error
        });
    });
    pedido.usuarioId = idUser;
    pedido.save();
    res.status(200).send(pedido);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
