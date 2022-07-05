const { Router } = require("express");
ThemeARouter = require("./ThemeARouter");
ThemeBRouter = require("./ThemeBRouter");

class MasterRouter {
   _router = Router();
   _subrouterA = ThemeARouter;
   _subrouterB = ThemeBRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

   _configure() {
    this._router.use("/themeA", this._subrouterA);
    this._router.use("/themeB", this._subrouterB);
  }
}

module.exports = new MasterRouter().router;