"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use(function (req, res, next) {
  var token = req.headers["access-token"];

  if (token) {
    _jsonwebtoken["default"].verify(token, process.env.KEY, function (err, decoded) {
      if (err) {
        return res.status(500).json({
          message: "Token Incorrecta"
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(404).json({
      message: "Token no proveida, asegurate de iniciar sesión"
    });
  }
});
var _default = router;
exports["default"] = _default;