const Express = require("express");
const routes = require("./routes");

/* const app = Express();
app.use(json());

const livros = [
  { id: 1, titulo: "Senhor dos Aneis" },
  { id: 2, titulo: "O Hobiit" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);

  res.status(200).json(livros[index])
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  let nome = req.body.titulo;
  res
    .status(201)
    .json({ mensagem: `O Livro '${nome}' foi cadastrado com sucesso!` });
});

app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;

  res.status(200).json(livros[index])
});

app.delete("/livros/:id", (req, res) => {
  let {id} = req.params
  let {titulo} = req.params
  let index = buscaLivro(id);
  let registroDeletado = livros.splice(index, 1)[0]

  res.status(200).json({"Registro deletado:": `${registroDeletado.titulo}`})
});

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}
*/

const app = Express();

routes(app);

module.exports = app;

