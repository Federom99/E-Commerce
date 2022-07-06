const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Producto } = require("./src/db.js");
const fs = require("fs");

// Syncing all the models at once.
// Seteado en force: true para que sea facil debuggear.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001");
    const productosJSON = JSON.parse(
      fs.readFileSync(__dirname + "/src/models/assets/productos.json")
    );
    //Cargar data en la DB
    (async function () {
      //Por cada producto del JSON, creo una entrada en la database
      productosJSON.forEach(async (p) => {
        await Producto.create({
          nombre: p.nombre,
          descripcion: p.descripcion,
          imagen: p.imagen,
          precio: parseInt(p.precio),
          stock: p.stock,
        });
      });

      console.log("Productos cargados en la DB");
    })();
  });
});
