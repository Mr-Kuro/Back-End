const express = require('express');
const bodyParser = require('body-parser');
const { calcular } = require('../service/CalculadoraServices');
const { responser } = require('../service/CalculadoraServices');



const app = express();
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send('This is our API-SET');
})



app.post('/api/calculadora', responser)

exports.app = app;