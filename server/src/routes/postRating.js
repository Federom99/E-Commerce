const { Router } = require("express");
const { Rating } = require("../db.js");

const router = Router();

router.post("/:productoid", async (req, res) => {
  try {
    const { puntaje, comentario, titulo, usuarioId } = req.body;
    const rating = await Rating.create({
      puntaje: puntaje,
      comentario: comentario,
      titulo: titulo,
    });
    rating.productoId = req.params.productoid;

    if (usuarioId) {
      rating.usuarioId = usuarioId;
    }
    await rating.save();
    res.status(200).send(rating);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
