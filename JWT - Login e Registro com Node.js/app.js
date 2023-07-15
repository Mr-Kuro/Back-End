require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const database = require("./src/models");

const app = express();
app.use(express.json());

// rotas
// inicio da api / public route
app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Olá" });
});

// inicio da api / private route
app.get("/user/:id", checkToken, async(req, res) => {
  const id = req.params.id;

  // chek if user exists
  const user = await database.user.findByPk(id)
  if(!user){
    return res.status(404).json({msg: "usuário não encontrado"});
  }

  return res.status(200).json({ msg: "Olá",  user });
});

// cria usários / autenticação
app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  // validacoes
  if (!name) {
    return res.status(422).json({ msg: "nome é obrigarório" });
  }
  if (!email) {
    return res.status(422).json({ msg: "email é obrigarório" });
  }
  if (!password) {
    return res.status(422).json({ msg: "senha é obrigarória" });
  }
  if (password !== confirmpassword) {
    return res.status(422).json({ msg: "as senhas não conferem" });
  }

  //check user exists
  const userExists = await database.user.findOne({ where: { email: email } });
  if (userExists) {
    return res.status(422).json({ msg: "email já cadastrado" });
  }

  // create password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  // crete User
  try {
    const user = await database.user.create({
      name,
      email,
      password: passwordHash,
    });
    return res.status(201).json({ msg: "usuario cadastrado" });
  } catch (error) {
    console.log(error.code);
    return res.status(500).json({
      msg: "ocorreu um erro interno do servidor",
      acao: "tente novamente em alguns instantes",
    });
  }
});

// efetua login / autorização
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  // validaçoes
  if (!email) {
    return res.status(422).json({ msg: "email é obrigarório" });
  }
  if (!password) {
    return res.status(422).json({ msg: "senha é obrigarória" });
  }
  //check user exists
  const user = await database.user.findOne({ where: { email: email } });
  if (!user) {
    return res.status(404).json({ msg: "email não cadastrado" });
  }

  // checa senha usuario e requisição
  const checkedPassword = await bcrypt.compare(password, user.password);

  if (!checkedPassword) {
    return res.status(422).json({ msg: "email ou senha invládo" });
  }

  // gera token
  try {
    const secretKey = process.env.SECRET_KEY;

    const TOKEN = jwt.sign({id: user.id}, secretKey, {expiresIn:'1d'})

    return res.status(200).json({msg: "usuario Autorizado", TOKEN})

  } catch (error) {
    console.log(error.code);
    return res.status(500).json({
      msg: "ocorreu um erro interno do servidor",
      acao: "tente novamente em alguns instantes",
    });
  }
});

// função checa token
function checkToken(req, res, next){
  const authHeader = req.headers['authorization'];
  const TOKEN= authHeader && authHeader.split(" ")[1];
  const SECRET_KEY= process.env.SECRET_KEY;

  try {
    if(!TOKEN){
      return res.status(404).json({msg:"acesso nedo!"})
    }

    jwt.verify(TOKEN, SECRET_KEY )

    next()
    
  } catch (error) {
    return res.status(400).json({msg:"Token Inválido"})
    
  }
}

// inicialização do servidor
app.listen(process.env.PORT | 3000);
