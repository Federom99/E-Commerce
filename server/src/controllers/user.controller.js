const { Usuario } = require("../db.js");
const { emailRegistro, emailOlvidePassword } = require("../helpers/emails.js");
const { generarJWT } = require("../helpers/generarJWT.js");
const generarTokenID = require("../helpers/generarTokenID.js");
const { comparePassword, hashPassword } = require("../helpers/hashPassword.js");

const register = async (req, res) => {
  //Sacamos los datos necesarios del body del request
  const { nombre, apellido, telefono, mail, direccion, contraseña, dni } =
    req.body;

  //Si alguno no existe, mandamos un error
  if (!nombre || !apellido || !mail || !direccion || !contraseña)
    return res.status(400).json({ Error: "Faltan datos." });

  const userExists = await Usuario.findOne({
    where: { mail },
  });

  if (userExists) {
    const error = new Error(`The user with email ${mail} already exists`);
    return res.status(400).json({ msg: error.message });
  }

  //Creamos el usuario en la db
  try {
    const createUser = await Usuario.create({
      dni: dni ? dni : Math.round(Math.random() * 100),
      nombre: nombre,
      apellido: apellido,
      mail: mail,
      telefono: telefono && telefono,
      direccion: direccion,
      contraseña: await hashPassword(contraseña),
      token: generarTokenID(),
    });

    console.log(createUser);

    //Cuando lo creamos, almacenamos los valores de la promesa de su creacion en la db y lo mandamos
    const createdUser = createUser.dataValues;

    emailRegistro({
      email: createdUser.mail,
      name: createUser.nombre,
      token: createdUser.token,
    });

    return res.status(201).json({
      msg: "Account created succesfully!",
      user: {
        nombre,
        apellido,
        isAdmin: createdUser.isAdmin,
        token: createdUser.token,
        confirmado: createdUser.confirmado,
      },
    });
    //Si pasa algo raro, mandamos un error y lo consologeamos
  } catch (e) {
    console.log(e);
    return res.status(400).send({ Error: e });
  }
};

const authentication = async (req, res) => {
  console.log(req.body);
  const { mail, contraseña } = req.body;

  const user = await Usuario.findOne({
    where: { mail },
  });

  if (!user) {
    const error = new Error("This user not exist");
    return res.status(400).json({ msg: error.message });
  }
  console.log(user);

  if (await comparePassword(contraseña, user.contraseña)) {
    return res.status(200).json({
      userId: user.id,
      name: user.nombre,
      email: user.mail,
      token: user.token,
      isAdmin: user.isAdmin,
      confirmado: user.confirmado,
      token: generarJWT(),
    });
  } else {
    const error = new Error("The password is not correct");
    return res.status(400).json({ msg: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Usuario.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const confirmarCuenta = async (req, res) => {
  try {
    const { token } = req.params;
    const usuarioConfirmar = await Usuario.findOne({
      where: { token },
    });

    if (!usuarioConfirmar) {
      const error = new Error("Token is not valid");
      return res.status(400).json({ error: error.message });
    }

    usuarioConfirmar.confirmado = true;
    usuarioConfirmar.token = "";
    await usuarioConfirmar.save();

    return res.json({
      msg: "User Confirmed Succesfully!",
      user: { confirmado: usuarioConfirmar.confirmado },
    });
  } catch (error) {
    console.log(error);
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;

  const mail = email;
  const userExists = await Usuario.findOne({
    where: { mail },
  });

  if (!userExists) {
    const error = new Error(`The user with email ${mail} not exists`);
    return res.status(400).json({ msg: error.message });
  }

  try {
    userExists.token = generarTokenID();
    await userExists.save();

    emailOlvidePassword({
      email: userExists.mail,
      name: userExists.nombre,
      token: userExists.token,
    });

    return res.json({
      msg: `Hemos enviado un email a ${userExists.mail} con las instrucciones`,
    });
  } catch (error) {
    console.log(error);
  }
};

const comprobarToken = async (req, res) => {
  const { token } = req.params;

  const userToken = await Usuario.findOne({
    where: { token },
  });

  if (userToken) {
    res.json({ tokenValid: true, msg: "Token valido" });
  } else {
    const error = new Error("El token solicitado no es valido");
    return res.status(404).json({ msg: error.message });
  }
};

const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!password) {
    const error = new Error("Password solicitada no ingresada");
    return res.status(400).json({ msg: error.message });
  }

  const user = await Usuario.findOne({
    where: { token },
  });

  if (user) {
    user.contraseña = await hashPassword(password);
    user.token = "";
    try {
      await user.save();
      return res.json({ msg: "Password cambiado correctamente" });
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }
};

module.exports = {
  register,
  authentication,
  getUsers,
  confirmarCuenta,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
};
