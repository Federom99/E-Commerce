require('dotenv').config();
const { Sequelize, Op, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/eccomerce`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const {} = sequelize.models;
const {Categoria, Pedido, Producto, ProductosFav, Rating, Usuario, Talle, Producto_talle, Compra, DatosFactura, Sucursales } = sequelize.models;
// Aca vendrian las relaciones
// Producto.hasMany(Reviews);

Sucursales.hasMany(Pedido);
Pedido.hasOne(Sucursales);

Producto.belongsTo(Categoria);
Categoria.hasMany(Producto);

Usuario.hasMany(Pedido);
Pedido.belongsTo(Usuario, { through: Compra });

Producto.belongsToMany(Pedido, { through: { model: Compra, unique: false}});
Pedido.belongsToMany(Producto, { through: { model: Compra, unique: false}});

Pedido.hasOne(DatosFactura);
DatosFactura.belongsTo(Pedido);

Rating.belongsTo(Producto);
Producto.hasMany(Rating);

Rating.belongsTo(Usuario);
Usuario.hasMany(Rating);

ProductosFav.belongsToMany(Usuario, {through: "producto_fav_usuario"});
Usuario.belongsToMany(ProductosFav, {through: "producto_fav_usuario"});

Producto.belongsToMany(Talle, {through: Producto_talle})
Talle.belongsToMany(Producto, {through: Producto_talle})



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  Op
};