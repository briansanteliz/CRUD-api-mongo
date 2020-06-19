"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _almacen = require("../controllers/almacen");

var router = (0, _express.Router)();
router.get("/", _almacen.get);
router.get("/:id", _almacen.getById);
router.get("/", _almacen.get);
router.post("/", _almacen.post);
router.put("/:id", _almacen.put);
router["delete"]("/:id", _almacen.dele);
var _default = router;
exports["default"] = _default;