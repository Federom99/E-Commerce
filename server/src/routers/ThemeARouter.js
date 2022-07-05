const { Router } = require("express");
ThemeAController = require("../controllers/ctr1");

class ThemeARouter {
     _router = Router();
     _controller = ThemeAController;

    get router() {
        return this._router
    }

    constructor() {
        this._configure()
    }

    _configure() {
        this._router.get("/",(req, res, next)=> {
            res.status(200).json(this._controller.defaultMethod());
        });
    }
}

module.exports = new ThemeARouter().router;