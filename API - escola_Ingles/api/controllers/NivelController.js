//controllers/NivelController.js

class NivelController {
  static async getAllNiveis(req, res){
    try {
      const todasAsNiveis = await database.Niveis.findAll()
      return res.status(200).json(todasAsNiveis)
      
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }

  static async getOneNivel(req, res){
    const {id} = req.params;
    try {
      const umaNivel = await database.Niveis.findOne(
        {
          where: {
            id: Number(id)
          }
        }
      )
      return res.status(200).json(umaNivel)


    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async setOneNivel(req, res){
    const novaNivel = req.body
    try {
      const novaNivelCriada = await database.Niveis.create(novaNivel)
      return res.status(200).json(novaNivelCriada)
    } catch (error) {
      return res.status(500).json(error.message)
      
    }
  }

  static async updateOneNivel(req, res){
    const {id} = req.params
    const novasInfos = req.body
    try {
      await database.Niveis.update(
        novasInfos, 
        {
          where: {
            id: Number(id)
          }
        }
      )

      const NivelAtualizada = await database.Niveis.findOne(
        {
          where: {
            id: Number(id)
          }
        }
      )
      
      return res.status(200).json(NivelAtualizada)

    } catch (error) {
      return res.status(500).json(error.message)
      
    }
  }

  static async deleteOneNivel(req, res){
    const {id} = req.params
    try {
      await database.Niveis.destroy(
        {where: {id: Number(id)}}
      )

      return res.status(200).json({mensagem:`Registro ${id} deletado!`})
    } catch (error) {
      return res.status(500).json(error.message)

    }
  }
}



module.exports = NivelController