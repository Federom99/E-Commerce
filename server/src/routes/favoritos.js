const { Router } = require("express");
const { ProductosFav } = require("../db.js");

const router = Router();
//! GET wishlist de un usuario
router.get("/:id", async (req, res) => {
  try {
    const favoritos = await ProductosFav.findAll({
      include: {
        model: Usuario,
        where: { id: req.params.id },
      },
    });

    res.status(200).send(favoritos);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;