//Importar dependencias
const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();
//configuración de cors (control de acceso)
app.use(cors())
// analizar las solicitudes de tipo de contenido - application/json
app.use(express.json());
// analizar las solicitudes de tipo de contenido - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// en producción
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
// en desarrollo
/*
db.sequelize.sync({ alter: true }).then(() => {
    console.log("Drop and re-sync db.");
});*/


require("./app/routes/ronda.routes")(app);
require("./app/routes/donacion.routes")(app);
require("./app/routes/negociacion.routes")(app);
require("./app/routes/juego.routes")(app);
require("./app/routes/jugador.routes")(app);
require("./app/routes/castigo.routes")(app);
require("./app/routes/prestigio.routes")(app);
require("./app/routes/equipo.routes")(app);


// ruta simple
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// Configurar puertos
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
