const database = require("../configs/sequelize-configs/models");

class AutoresController {
  static async getAllAutores(req, res) {
    try {
      const todosOsAutores = await database.Autores.findAll();
      return res.status(200).json(todosOsAutores);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async setOneAutor(req, res){
    const novoAutor = req.body;
    try {
      const novoAutorCriado = await database.Autores.create(novoAutor)
      return res.status(200).json(novoAutorCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getOneAutor(req, res){
    const {id} = req.params;
    try {
      const umAutor = await database.Autores.findOne({where: {id: Number(id)}})
      return res.status(200).json(umAutor);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateOneAutor(req, res){
    const { id } = req.params;
    const novasInfos = req.body;

    try {
      await database.Autores.update(novasInfos, {where: {id: Number(id)}})
      const AutorAtualizado = await  database.Autores.findOne({where:{id: Number(id)}})
      return res.status(200).json(AutorAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteOneAutor(req, res){
    const {id} = req.params;
    try {
      const AutorParaDeletar = await database.Autores.findOne({where: {id: Number(id)}})
      await database.Autores.destroy({where: {id: Number(AutorParaDeletar.id)}})
      return res.status(200).json({RegistroDeletado: AutorParaDeletar})
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }
}

module.exports = AutoresController;
