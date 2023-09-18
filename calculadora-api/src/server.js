const {app} = require('./routes/calculadoraRoutes');

const port = 3003;

app.listen(port, () => {
  console.log(`Server API is listening at http://localhost:${port}`)
})
exports.app = app;