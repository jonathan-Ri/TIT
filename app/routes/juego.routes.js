const { juego } = require("../models/index.js");

module.exports = app => {
    const juego = require("../controllers/juego.controller.js");
    var router = require("express").Router();
    
    router.post("/", juego.create);
    router.get("/", juego.findAll);
    router.get("/:id_juego", juego.findOne);
    router.put("/:id_juego", juego.update);
    router.delete("/:id_juego", juego.delete);
    router.delete("/", juego.deleteAll);
    app.use('/api/juego', router);
  };