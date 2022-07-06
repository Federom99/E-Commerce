const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const userRouter = require('./user.js')
const productsRouter = require('./products')
const createProductRouter = require("./createProduct")
const categoryRouter = require("./category")
const editProductRouter = require("./editProduct")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/user', userRouter)
router.use('/products', productsRouter)
router.use("/create/product", createProductRouter)
router.use("/category", categoryRouter)
router.use("/edit/product", editProductRouter)


module.exports = router;