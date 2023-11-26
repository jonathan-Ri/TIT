const { donacion } = require("../models/index.js");

module.exports = app => {
    const donacion = require("../controllers/donacion.controller.js");
    var router = require("express").Router();

    router.post("/", donacion.create);
    router.get("/", donacion.findAll);
    router.get("/:id_donacion", donacion.findOne);
    router.put("/:id_donacion", donacion.update);
    router.delete("/:id_donacion", donacion.delete);
    router.delete("/", donacion.deleteAll);
    app.use('/api/donacion', router);
  };