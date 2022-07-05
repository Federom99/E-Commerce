const { Router } = require("express");
ThemeBController = require("../controllers/ctr2");

class ThemeBRouter {
   _router = Router();
   _controller = ThemeBController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

   _configure() {
    this._router.get("/", (req, res, next) => {
      res.status(200).json(this._controller.defaultMethod());
    });
  }
}

module.exports = new ThemeBRouter().router;