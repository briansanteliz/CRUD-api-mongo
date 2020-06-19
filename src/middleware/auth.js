import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.use((req, res, next) => {
  const token = req.headers["access-token"];

  if (token) {
    jwt.verify(token, process.env.KEY, (err, decoded) => {
      if (err) {
        return res.status(500).json({ message: "Token Incorrecta" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(404).json({ message: "Token no proveida, asegurate de iniciar sesión" });
  }
});
export default router;
