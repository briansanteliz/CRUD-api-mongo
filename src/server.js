import express, { urlencoded, json } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

//routes
import routesIndex from "./routes/index";
import routesIniciar from "./routes/iniciar";
import routesAlmacen from "./routes/almacen";
import authController from "./middleware/auth";

const app = express();

//Settings
app.set("port", process.env.PORT || 8080);
dotenv.config();

//Middlewares
app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));

//Routes
app.use(routesIndex);
app.use("/iniciar", routesIniciar);
app.use("/almacen", authController, routesAlmacen);

module.exports = app;
