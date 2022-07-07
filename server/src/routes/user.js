const { Router } = require("express");
const {
  authentication,
  register,
} = require("../controllers/user.controller.js");

const router = Router();

router.post("/register", register);
router.post("/login", authentication);

module.exports = router;
