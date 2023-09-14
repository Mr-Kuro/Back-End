const express = require('express');
const routes = require('./routes/calculadoraRoutes');
const app = express();


app.use(routes.app)
app.get('/', (req, res) => {
  res.send('Hello')
})

exports.app = app;