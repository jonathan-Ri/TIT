const { equipo } = require("../models/index.js");

module.exports = app => {
    const equipo = require("../controllers/equipo.controller.js");
    var router = require("express").Router();

    router.post("/", equipo.create);
    router.get("/", equipo.findAll);
    router.get("/:id_equipo", equipo.findOne);
    router.put("/:id_equipo", equipo.update);
    router.delete("/:id_equipo", equipo.delete);
    router.delete("/", equipo.deleteAll);
    app.use('/api/equipo', router);
  };