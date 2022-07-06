const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const userRouter = require('./user.js')
const productsRouter = require('./products')
const productRouter = require('./product.js')

const { Op } = require("../db");
const {Categoria, Pedido, Producto, ProductosFav, Rating, Usuario} = require("../db");

const {API_KEY} = process.env;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/user', userRouter)
router.use('/products', productsRouter)
router.use('/product', productRouter)

//TEST DE RUTAS
router.get("/algo", async (req, res) => {
    try{
        const cat = await Categoria.create({"nombre": "REMERA"})
        res.send("HOLA - "+cat.nombre);
    }catch(e){console.log(e);}
})


module.exports = router;