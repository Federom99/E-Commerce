const nodemailer = require("nodemailer");

const emailRegistro = async (data) => {
//   console.log(`Data`, data);
  const { name, email, token } = data;

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "rgzrgzm@gmail.com",
      pass: "iqzbjdqabhfxfeut",
    },
  });

  const info = await transport.sendMail({
    from: "Meli-Ropa - E-commerce",
    to: email,
    subject: "Meli-Ropa - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en Meli-Ropa",
    html: `<p>Hola : ${name}, Comprueba tu cuenta en Meli-Ropa</p>
    <p>Tu cuenta ya esta casi lista, solo debes confirmarla en el siguiente enlace: 
        <a href="http://localhost:3000/confirmar/${token}">Confirmar cuenta</a>
    </p>
    `,
  });
};

module.exports = { emailRegistro };
