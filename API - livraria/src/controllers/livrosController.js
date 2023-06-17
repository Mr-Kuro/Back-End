const database = require("../configs/sequelize-configs/models");

class LivrosController {
  static async getAllLivros(req, res) {
    try {
      const todosOsLivros = await database.Livros.findAll();
      return res.status(200).json(todosOsLivros);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async setOneLivro(req, res){
    const novoLivro = req.body;
    try {
      const novoLivroCriado = await database.Livros.create(novoLivro)
      return res.status(200).json(novoLivroCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getOneLivro(req, res){
    const {id} = req.params;
    try {
      const umLivro = await database.Livros.findOne({where: {id: Number(id)}})
      return res.status(200).json(umLivro);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateOneLivro(req, res){
    const { id } = req.params;
    const novasInfos = req.body;

    try {
      await database.Livros.update(novasInfos, {where: {id: Number(id)}})
      const livroAtualizado = await  database.Livros.findOne({where:{id: Number(id)}})
      return res.status(200).json(livroAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteOneLivro(req, res){
    const {id} = req.params;
    try {
      const livroParaDeletar = await database.Livros.findOne({where: {id: Number(id)}})
      await database.Livros.destroy({where: {id: Number(livroParaDeletar.id)}})
      return res.status(200).json({RegistroDeletado: livroParaDeletar})
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

  static async getByEditora(req, res){
    const {editora} = req.query;
    try {
      const listaDeLivros = await database.Livros.findAll({where: {editora:editora}})
      return res.status(200).json(listaDeLivros)
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }
}

module.exports = LivrosController;
