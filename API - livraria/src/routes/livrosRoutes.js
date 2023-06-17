const { Router } = require("express");
const LivrosController = require("../controllers/livrosController.js");

const routers = Router();

routers
  .get("/livros/busca", LivrosController.getByEditora)
  .get("/livros/:id", LivrosController.getOneLivro)
  .get("/livros", LivrosController.getAllLivros)

  .post("/livros", LivrosController.setOneLivro)

  .put("/livros/:id", LivrosController.updateOneLivro)
  
  .delete("/livros/:id", LivrosController.deleteOneLivro)

module.exports = routers;
