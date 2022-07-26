const { Router } = require("express");
const { isAdmin } = require("../controllers/user.controller");
const { Producto_talle, Talle } = require("../db");
const router = Router();

router.put("/:productId", isAdmin, async (req, res) => {
  const { productId } = req.params;

  const { talle, stock } = req.body;

  try {
    //Busco el talle en la db por nombre.
    const talleInDb = await Talle.findOne({ where: { talle: talle } });
    const talleId = talleInDb.dataValues.id;

    //Actualizo el stock de la prenda de ese talle segun lo que me pasen por el body.
    await Producto_talle.update(
      { stock: stock },
      {
        where: {
          productoId: productId,
          talleId: talleId,
        },
      }
    );

    //Busco el stock updateado.
    const updatedStock = await Producto_talle.findOne({
      where: { productoId: productId, talleId: talleId },
    });

    //Si tengo un numero negativo en stock lo vuelvo a cambiar a 0.
    if (updatedStock.dataValues.stock < 0)
      await updatedStock.update({ stock: 0 });

    //Mando el stock updateado
    return res.send(updatedStock);
  } catch (e) {
    return res.send(e);
  }
});

module.exports = router;
