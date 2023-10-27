import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
// import helmet from "helmet";
// import path from "path";
import { router } from "./router/form.routes.js";

const app = express();

//conexiones de carpetas
import { environments } from "./conf/environments.js";

import { sequelize } from "./conf/db.js";

//conexion al base de datos
sequelize
  .authenticate()
  .then(() => console.log("Conexión a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));

//implementar middleware

// Library middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
// Configuración de motor de plantillas EJS
app.set("view engine", "ejs");
// app.set("views", "./views");

// app.set("views", path.join(__dirname, "./views"));
app.use("/", router);
app.use("/formulario", router);

// Servidor en escucha de peticiones
app.listen(environments.PORT, async () => {
  console.log(`server on port ${environments.PORT}`);
});
