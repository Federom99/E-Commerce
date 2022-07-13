const { Router } = require("express");
const { Rating } = require("../db.js");

const router = Router();

router.post("/:productoid", async (req, res) => {
  try {
    const { puntaje, comentario, titulo, usuarioId } = req.body;
    const parsedScore = parseInt(puntaje)

    if(!parsedScore || parsedScore < 1 || parsedScore > 5) return res.status(400).send
    ({Error: 'El puntaje debe ser un número del 1 al 5.'})

    const rating = await Rating.create({
      puntaje: parsedScore,
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
