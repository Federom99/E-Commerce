const { Router } = require("express");
const { Producto } = require("../db.js");

const router = Router();

// DELETE producto con id

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const productoABorrar = await Producto.findByPk(id);
    await productoABorrar.destroy();
    res.json(id);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
