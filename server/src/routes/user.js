const { Router } = require("express");
const {
  authentication,
  register,
  getUsers,
} = require("../controllers/user.controller.js");

const router = Router();

router.post("/register", register);
router.post("/login", authentication);
router.get("/", getUsers)

module.exports = router;
