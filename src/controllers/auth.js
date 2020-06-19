import jwt from "jsonwebtoken";

const authController = (req, res) => {
  if (req.body.usuario === "admin" && req.body.password === "password") {
    const payload = {
      check: true,
    };
    const token = jwt.sign(payload, process.env.KEY, {
      expiresIn: 1440,
    });
    res.status(200).json({
      message: "Autenticación Exitosa",
      token,
    });
  } else {
    res.status(403).json({ message: "Tus Credenciales No son Correctas" });
  }
};

module.exports = { authController };
