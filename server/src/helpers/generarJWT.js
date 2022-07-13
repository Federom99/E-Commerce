const jwt = require("jsonwebtoken");

const generarJWT = () => {
  return jwt.sign({ nombre: "" }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { generarJWT };
