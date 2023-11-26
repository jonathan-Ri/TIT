const { castigo } = require("../models/index.js");

module.exports = app => {
    const castigo = require("../controllers/castigo.controller.js");
    var router = require("express").Router();

    router.post("/", castigo.create);
    router.get("/", castigo.findAll);
    router.get("/:id_castigo", castigo.findOne);
    router.put("/:id_castigo", castigo.update);
    router.delete("/:id_castigo", castigo.delete);
    router.delete("/", castigo.deleteAll);
    app.use('/api/castigo', router);
  };