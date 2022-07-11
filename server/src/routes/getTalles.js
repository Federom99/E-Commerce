const { Router } = require("express");
const {Talle} = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.get('/', async(req, res) => {
    let talle = await Talle.findAll();
    talles = [];
    talle.map((t) => {
        talles.push(t.talle);
    })
    res.status(200).send(talles);
})


module.exports = router;
