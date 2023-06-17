"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Autores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Autores.hasMany(models.Livros, { foreignKey: "autor_id" });
    }
  }
  Autores.init(
    {
      nome: DataTypes.STRING,
      nacionalidade: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Autores",
    }
  );
  return Autores;
};
