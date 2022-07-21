const { Router } = require("express");
const { ProductosFav , Usuario } = require("../db.js");

const router = Router();

// DELETE producto con id

router.delete("/:id", async (req, res, next) => {
    const { userId }= req.body
  try {
      const id = req.params.id;
      console.log('userIdBE: ',userId,'productIdBE: ',id)
    const productoABorrar = await ProductosFav.findOne({
        include:{
            model: Usuario,
            where: {id: userId}
        },where:{
            productId: parseInt(id)
        }
    });
    await productoABorrar.destroy();
    res.json(id,userId);
  } catch (error) {
    next(error);
  }
});
module.exports = router;