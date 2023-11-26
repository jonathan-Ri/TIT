const { jugador } = require("../models/index.js");

module.exports = app => {
    const jugador = require("../controllers/jugador.controller.js");
    var router = require("express").Router();

    router.post("/", jugador.create);
    router.get("/", jugador.findAll);
    router.get("/:id_jugador", jugador.findOne);
    router.put("/:id_jugador", jugador.update);
    router.delete("/:id_jugador", jugador.delete);
    router.delete("/", jugador.deleteAll);
    app.use('/api/jugador', router);
  };