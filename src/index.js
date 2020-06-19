import "@babel/polyfill";
import app from "./server";

//iniciando el servidor
(async () => {
  await app.listen(app.get("port"));
  console.log(`Servidor en el puerto ${app.get("port")}`);
})();
