module.exports = app => {
    const prestigio = require("../controllers/prestigio.controller.js");
    var router = require("express").Router();

    router.post("/", prestigio.create);
    router.get("/", prestigio.findAll);
    router.get("/:id_prestigio", prestigio.findOne);
    router.put("/:id_prestigio", prestigio.update);
    router.delete("/:id_prestigio", prestigio.delete);
    router.delete("/", prestigio.deleteAll);
    app.use('/api/prestigio', router);
  };