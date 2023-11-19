const { productos } = require("../models/index.js");

module.exports = app => {
    const productos = require("../controllers/Productos.controller.js");
    var router = require("express").Router();

    router.post("/", productos.create);
    router.get("/", productos.findAll);
    router.get("/:Codigo", productos.findOne);
    router.put("/:Codigo", productos.update);
    router.delete("/:Codigo", productos.delete);
    router.delete("/", productos.deleteAll);
    app.use('/api/productos', router);
  };