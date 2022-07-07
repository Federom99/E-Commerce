const { Router } = require("express");
const { Usuario } = require("../db.js");

const router = Router();
// PUT PARA CAMBIAR UN USER A ADMIN
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id);
    const {
      uid,
      nombre,
      apellido,
      dni,
      direccion,
      contraseña,
      telefono,
      mail,
      isAdmin,
    } = req.body;
    if (uid) {
      usuario.id = uid;
      usuario.save();
    }
    if (nombre) {
      usuario.nombre = nombre;
      usuario.save();
    }
    if (apellido) {
      usuario.apellido = apellido;
      usuario.save();
    }
    if (dni) {
      usuario.dni = dni;
      usuario.save();
    }
    if (direccion) {
      usuario.direccion = direccion;
      usuario.save();
    }
    if (contraseña) {
      usuario.contraseña = contraseña;
      usuario.save();
    }
    if (telefono) {
      usuario.telefono = telefono;
      usuario.save();
    }
    if (mail) {
      usuario.mail = mail;
      usuario.save();
    }
    if (isAdmin) {
      usuario.isAdmin = isAdmin;
      usuario.save();
    }
    res.status(200).send(id);
  } catch (error) {
    res.status(400).send(error);
  }
});
