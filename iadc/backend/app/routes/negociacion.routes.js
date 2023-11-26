module.exports = app => {
    const usuarios = require("../controllers/negociacion.controller.js");
    var router = require("express").Router();

    router.post("/", usuarios.create);
    router.get("/", usuarios.findAll);
    router.get("/:id_negociacion", usuarios.findOne);
    router.put("/:id_negociacion", usuarios.update);
    router.delete("/:id_negociacion", usuarios.delete);
    router.delete("/", usuarios.deleteAll);
    app.use('/api/negociacion', router);
  };