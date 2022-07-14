const { Router } = require("express");
const { Producto, Talle, Categoria } = require("../db.js");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const parsedId = parseInt(id);

  if (!parsedId && parsedId !== 0)
    return res.status(200).send({ Error: "El id debe ser un numero." });
  const product = await Producto.findByPk(parsedId, {
    include: [Talle, Categoria],
  });
  if (product) return res.status(200).send(product);
  else return res.status(400).send({ Error: "Ese producto no existe." });
});

module.exports = router;
