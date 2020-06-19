"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authController = function authController(req, res) {
  if (req.body.usuario === "admin" && req.body.password === "password") {
    var payload = {
      check: true
    };

    var token = _jsonwebtoken["default"].sign(payload, process.env.KEY, {
      expiresIn: 1440
    });

    res.status(200).json({
      message: "Autenticación Exitosa",
      token: token
    });
  } else {
    res.status(403).json({
      message: "Tus Credenciales No son Correctas"
    });
  }
};

module.exports = {
  authController: authController
};