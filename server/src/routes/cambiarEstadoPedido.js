const { Router } = require("express");
const { Pedido, Usuario, Compra } = require("../db.js");
const nodemailer = require('nodemailer');

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

    const pedidos = await Pedido.findOne({
      include: [
        {
          model: Usuario,
        },
      ],
      where: { id: id },
    });
    console.log(pedidos.dataValues.usuario.dataValues);
    const mail = pedidos.dataValues.usuario.dataValues.mail;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "henrypfg11@gmail.com",
        pass: "chirxatvtficaopa",
      },
    });
    var mailOptions = {
      from: '"PRO-ROPA" <henrypfg11@gmail.com>',
      to: mail,
      subject: "Cambio de estado en su pedido ✔",
      // text: "Tu pedido ha sido " + estado,
      html:`
      <div>
        <h1>¡Hola!</ h1>
        <h2>Nos complace notificarte que tu pedido #${id} se encuentra ${estado}</ h2>
        <h3>Pronto te notificaremos cómo continúa el proceso.</h3>
        <hr />
        <p><em>*El monto no incluye impuestos y/o tasas bancarias</ p>
      </ div>
      `
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error.message);
      }
    });

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