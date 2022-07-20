const { Router } = require("express");

const router = Router();

router.put("/:id", async (req, res) => {
    res.send(req.params.id)
});

module.exports = router;