const { Router } = require("express");
const {Usuario} = require('../db')

const router = Router();

router.put("/:id", async (req, res) => {

    const {id} = req.params

    const user = await Usuario.findByPk(id)

    await Usuario.update({
        banned: !user.dataValues.banned
    },
    {where: {id: id}})

    res.send(`Usuario ${id} baneado.`)
});

module.exports = router;