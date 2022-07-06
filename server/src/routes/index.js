const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productsRouter = require('./products')

const { Op } = require("../db");
const {Categoria, Pedido, Producto, ProductosFav, Rating, Usuario} = require("../db");

const {API_KEY} = process.env;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/products', productsRouter)

//TEST DE RUTAS
router.get("/algo", async (req, res) => {
    try{
        const cat = await Categoria.create({"nombre": "REMERA"})
        res.send("HOLA - "+cat.nombre);
    }catch(e){console.log(e);}
})


module.exports = router;