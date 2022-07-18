const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const { Producto, Talle, Producto_talle, Categoria, Usuario, Pedido, Compra} = require("./src/db.js");

const fs = require("fs");
const { hashPassword } = require("./src/helpers/hashPassword.js");

// Syncing all the models at once.
// Seteado en force: true para que sea facil debuggear.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001");
    const productosJSON = JSON.parse(
      fs.readFileSync(__dirname + "/src/models/assets/productos.json")
    );
    //Cargar data en la DB
    (async function () {
      //Creo un talle para los productos sin talle
      Talle.create({
        talle: 'Sin talle'
      })


      //Por cada producto del JSON, creo una entrada de su categoria en la DB (si no existe) y, a partir de la categoria, creo el producto para asociarlo con ella.
      productosJSON.forEach(async (p) => {
        const categoria = await Categoria.findOrCreate({
          where: { nombre: `${p.categoria[0]}` },
          defaults: { nombre: p.categoria[0] },
        })

        const productoCreado = await categoria[0].createProducto({
          nombre: p.nombre,
          descripcion: p.descripcion,
          imagen: p.imagen,
          precio: parseInt(p.precio),
        });


        //Si no tengo un talle, lo pongo o lo traigo de la db, de lo contrario, les pongo el talle "Sin talle" que cree antes.
        //En ambos casos, si en el JSON tienen el atributo stock lo asigno en la tabla que relaciona al talle y al producto para
        //el talle en particular. Si no tienen el atributo stock, lo pongo en 0.
        if(p.talle){
          p.talle.forEach(async (t, i) => {
          const talle = await Talle.findOrCreate({
            where: { talle: `${t}` },
            defaults: { talle: t },
          })

          const talleAgregado = await productoCreado.addTalle(talle[0].dataValues.id, { through: { selfGranted: false } });

          p.stock ? await Producto_talle.update({stock: p.stock[i]}, {where: {id: talleAgregado[0].dataValues.id}}) : await Producto_talle.update({stock: 0}, {where: {id: talleAgregado[0].dataValues.id}})

        })
      }
      else{
        const talleAgregado = await productoCreado.addTalle(1, { through: { selfGranted: false } });

        p.stock ? await Producto_talle.update({stock: p.stock}, {where: {id: talleAgregado[0].dataValues.id}}) : await Producto_talle.update({stock: 0}, {where: {id: talleAgregado[0].dataValues.id}})
      }
      });


      //Agarro los usuarios del JSON
      const usuariosJSON = JSON.parse(
        fs.readFileSync(__dirname + "/src/models/assets/usuarios.json")
      );

      const users = []

      //Por cada usuario del JSON, creo un usuario en la DB con su data (encriptando la pass).
      usuariosJSON.forEach(async (u) => {

        //Pongo su id en un array
        users.push(u.id)

        await Usuario.create({
          id: u.id,
          nombre: u.nombre,
          apellido: u.apellido,
          telefono: u.telefono,
          mail: u.mail,
          direccion: u.direccion,
          dni: u.dni,
          contraseña: await hashPassword(u.contraseña),
          isAdmin: u.isAdmin,
          confirmado: true,
          carrito: u.carrito
        })

      })

      //Saco los pedidos del json
      const pedidosJSON = JSON.parse(
        fs.readFileSync(__dirname + "/src/models/assets/pedidos.json")
      );

      pedidosJSON.forEach(async (p, i) => {

        const pedido = await Pedido.create({
          fecha: p.fecha,
          pago_total: p.pago_total,
          direccion_de_envio: p.direccion_de_envio,
          estado: p.estado
        })

        p.idProductos.forEach(async (id) => {
          const productoDelPedido = await Producto.findByPk(id)
          await pedido.addProducto(productoDelPedido)
        })

        //Agarro un user random de la db y le asigno el pedido
        const randomUser = await Usuario.findOne({where: {
          id: users[Math.floor(Math.random()*users.length)]
        }})

        await randomUser.addPedido(pedido)

      })
    }
    )();
  });
});
