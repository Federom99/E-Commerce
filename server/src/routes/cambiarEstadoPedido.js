const { Router } = require("express");
const { Pedido } = require("../db.js");

const router = Router();

// PUT Pedido para poder cambiar el estado
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const pedido = await Pedido.findByPk(id);
    const { pago_total, direccion_de_envio, estado, fecha } = req.body;

    if (pago_total) {
      pedido.pago_total = pago_total;
      pedido.save();
    }

    if (fecha) {
      pedido.fecha = fecha;
      pedido.save();
    }

    if (direccion_de_envio) {
      pedido.Direccion_de_envio = direccion_de_envio;
      pedido.save();
    }
    if (estado) {
      pedido.Estado = estado;
      pedido.save();
    }
    res.status(200).send(id);
  } catch (error) {
    res.status(400).send(error);
  }
});
