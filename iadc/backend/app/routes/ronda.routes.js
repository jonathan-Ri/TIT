const { ronda } = require("../models/index.js");

module.exports = app => {
    const ronda = require("../controllers/ronda.controller.js");
    var router = require("express").Router();
    
    router.post("/", ronda.create);
    router.get("/", ronda.findAll);
    router.get("/:id_ronda", ronda.findOne);
    router.put("/:id_ronda", ronda.update);
    router.delete("/:id_ronda", ronda.delete);
    router.delete("/", ronda.deleteAll);
    app.use('/api/ronda', router);
  };