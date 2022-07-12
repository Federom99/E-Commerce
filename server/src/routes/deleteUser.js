const { Router } = require("express");
const { Usuario } = require("../db.js");

const router = Router();

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const usuarioaborrar = await Usuario.findByPk(id);
    await usuarioaborrar.destroy();
    res.status(200).send(id);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
