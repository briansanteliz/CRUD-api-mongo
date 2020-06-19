"use strict";

var _express = require("express");

var router = (0, _express.Router)();
router.get("/", function (req, res) {
  res.status(200).send("Bienvenido Admin, Inicia Sesion para comenzar");
});
module.exports = router;