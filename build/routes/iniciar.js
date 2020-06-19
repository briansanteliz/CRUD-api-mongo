"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth");

var router = (0, _express.Router)();
router.post("/", _auth.authController);
var _default = router;
exports["default"] = _default;