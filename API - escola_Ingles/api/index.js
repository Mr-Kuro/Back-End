const express = require("express");
const routes = require("./routes");

const app = express();
const port = 8080;

routes(app);

app.listen(port, () => console.log(`server on in port ${port}`));

module.exports = app;
