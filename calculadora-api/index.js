const app = require('./src/serve').app;
const port = 3002;

app.listen(port, () => {
  console.log(`Server API is listening at http://localhost:${port}`)
})