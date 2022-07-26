const { Router } = require("express");
const { isAdmin } = require("../controllers/user.controller.js");
const { Producto } = require("../db.js");

const router = Router();

// DELETE producto con id

router.delete("/:id", isAdmin, async (req, res, next) => {
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
