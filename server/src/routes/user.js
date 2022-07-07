const { Router } = require("express");
const {
  authentication,
  register,
} = require("../controllers/user.controller.js");

const {Usuario} = require('../db')

const router = Router();

router.post("/register", register);
router.post("/login", authentication);

router.get('/:id', async (req, res) => {
  let {id} = req.params
  
  //Parseo el id

  const foundUser = await Usuario.findByPk(id)

  if(!foundUser) return res.status(404).send({Error:'Usuario no encontrado.'})
  else return res.send(foundUser)

})

module.exports = router;
