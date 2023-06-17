// controllers/TurmaController.js

class TurmaController {
  static async getAllTurmas(req, res){
    try {
      const todasAsTurmas = await database.Turmas.findAll()
      return res.status(200).json(todasAsTurmas)
      
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }

  static async getOneTurma(req, res){
    const {id} = req.params;
    try {
      const umaTurma = await database.Turmas.findOne(
        {
          where: {
            id: Number(id)
          }
        }
      )
      return res.status(200).json(umaTurma)


    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async setOneTurma(req, res){
    const novaTurma = req.body
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma)
      return res.status(200).json(novaTurmaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
      
    }
  }

  static async updateOneTurma(req, res){
    const {id} = req.params
    const novasInfos = req.body
    try {
      await database.Turmas.update(
        novasInfos, 
        {
          where: {
            id: Number(id)
          }
        }
      )

      const TurmaAtualizada = await database.Turmas.findOne(
        {
          where: {
            id: Number(id)
          }
        }
      )
      
      return res.status(200).json(TurmaAtualizada)

    } catch (error) {
      return res.status(500).json(error.message)
      
    }
  }

  static async deleteOneTurma(req, res){
    const {id} = req.params
    try {
      await database.Turmas.destroy(
        {where: {id: Number(id)}}
      )

      return res.status(200).json({mensagem:`Registro ${id} deletado!`})
    } catch (error) {
      return res.status(500).json(error.message)

    }
  }

}

module.exports = TurmaController
