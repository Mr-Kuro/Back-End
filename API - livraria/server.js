/* metodo 1
const http = require("http");
const port = 3000;

const rotas = {
  '/': 'curso de Node',
  '/livros': 'entrei na pág de livros',
  '/autores': 'listagem de  de autores',
  '/editora': 'pág da editora',
  '/sobre': 'tudo sobre o projeto',

}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`servidor escutando em http://localhost:${port}`);
});*/

// metodo 1
const app = require("./src/app.js");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`servidor escutando em http://localhost:${port}`);
});
