import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Bienvenido Admin, Inicia Sesion para comenzar");
});

module.exports = router;
