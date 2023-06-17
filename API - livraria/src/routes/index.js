const bodyParser = require("body-parser");
const { Router } = require("express");

const index = Router();

index.get("/", (req, res) => {
  res.status(200).json({ titulo: "Mangá King" });
});

const livros = require("./livrosRoutes.js");
const autores = require("./autoresRoutes.js")

module.exports = (app) => {
  app.use(bodyParser.json(), index, livros, autores);
};
