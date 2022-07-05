const {Router} = require('express')
const { Usuario } = require('../db.js');


const router = Router()

router.post('/register', async(req, res) => {


    //Sacamos los datos necesarios del body del request
    const { nombre, apellido, telefono, mail, direccion, contraseña } =
      req.body;

    //Si alguno no existe, mandamos un error
    if (!nombre || !apellido || !mail || !direccion || !contraseña)
      return res.status(400).json({ Error: "Faltan datos." });

      //Creamos el usuario en la db
      try{
      const createUser = await Usuario.create({
        nombre: nombre,
        apellido: apellido,
        mail: mail,
        telefono: telefono && telefono,
        direccion: direccion,
        contraseña: contraseña
      });

      console.log(createUser)

      //Cuando lo creamos, almacenamos los valores de la promesa de su creacion en la db y lo mandamos
      const createdUser = createUser.dataValues

      res.status(201).send(createdUser);
      //Si pasa algo raro, mandamos un error y lo consologeamos
    }catch(e){
        console.log(e)
        return res.status(400).send({ Error: e });
    }



})

module.exports = router