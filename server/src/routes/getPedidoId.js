const { Router } = require("express");
const { Pedido, Producto } = require("../db.js");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const pedido = await Pedido.findByPk(id, {
      include: [
        {
          model: Producto,
          attributes: ["nombre"],
          through: { attributes: ["cantidad", "productoId"] },
        },
      ],
    });

    res.status(200).send(pedido);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
