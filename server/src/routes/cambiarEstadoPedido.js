const { Router } = require("express");
const { Pedido } = require("../db.js");

const router = Router();

// PUT Pedido para poder cambiar el estado
router.put("/", async (req, res) => {
  const { id,
    pago_total,
    fecha,
    direccion_de_envio,
    estado } =
    req.body;

  try {
    await Pedido.update(
      {
        pago_total,
        fecha,
        direccion_de_envio,
        estado
      },
      { where: { id } }
    );
    res.status(200).send(id);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

// router.put("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const pedido = await Pedido.findByPk(id);
//     const { pago_total, direccion_de_envio, estado, fecha } = req.body;

//     if (pago_total) {
//       pedido.pago_total = pago_total;
//       pedido.save();
//     }

//     if (fecha) {
//       pedido.fecha = fecha;
//       pedido.save();
//     }

//     if (direccion_de_envio) {
//       pedido.direccion_de_envio = direccion_de_envio;
//       pedido.save();
//     }
//     if (estado) {
//       pedido.estado = estado;
//       pedido.save();
//     }
//     res.status(200).send(id);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// module.exports = router;