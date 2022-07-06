const { Router } = require("express");
const { Producto } = require("../db.js");

const router = Router();

router.get('/', async(req, res) => {

    res.send('funca')


})


module.exports = router;
