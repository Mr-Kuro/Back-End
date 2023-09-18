const express = require("express");
const bodyParser = require("body-parser");
const { responser } = require("../controllers/calculadoraControllers");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api", (req, res) => {
  res.send("This is our API-SET");
});

app.post("/api/calculadora", responser);

exports.app = app;

