const {Router} = require('express')


const router = Router()

router.post('/register', async(req, res) => {

    console.log(req.body);

    const { nombre, apellido, telefono, mail, direccion, contraseña } =
      req.body;

    if (!nombre || !apellido || !mail || !direccion || !contraseña)
      return res.status(400).json({ Error: "Faltan datos." });

    res.status(201).json("This endpoint should register a user.");

})

module.exports = router