ErrorHandler = require("../models/ErrorHandler");

class ThemeAController {
  defaultMethod() {
    throw new ErrorHandler(501, "Not implemented method");
  }
}

module.exports = new ThemeAController();