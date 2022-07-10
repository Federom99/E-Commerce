const { Router } = require("express");
const { Producto} = require("../db.js");

const router = Router();


// POST cargar productos en la base de datos
router.post("/", async (req, res) => {
    const producto = await Producto.bulkCreate(productosDB);
  
    res.status(200).send(producto);
  });

  module.exports = router;