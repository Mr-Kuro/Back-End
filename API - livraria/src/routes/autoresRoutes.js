const { Router } = require("express");
const AutoresController = require("../controllers/autoresController.js");

const routers = Router();

routers
  .get("/autores", AutoresController.getAllAutores)
  .get("/autores/:id", AutoresController.getOneAutor)
  .post("/autores", AutoresController.setOneAutor)
  .put("/autores/:id", AutoresController.updateOneAutor)
  .delete("/autores/:id", AutoresController.deleteOneAutor)

module.exports = routers;
