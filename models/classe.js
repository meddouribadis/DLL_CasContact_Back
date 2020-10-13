'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classe.hasMany(models.User, {
        foreignKey: 'id_classe',
        as: 'students'
      });
    }
  };
  Classe.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nom: { type: DataTypes.STRING, allowNull: false },
    createdAt: { allowNull: false, type: DataTypes.DATE },
    updatedAt: { allowNull: false, type: DataTypes.DATE }
  }, {
    sequelize,
    modelName: 'Classe',
    defaultScope: {
      attributes: { exclude: ['hash'] }
    },
    scopes: {
      withHash: { attributes: {}, }
    }
  });
  return Classe;
};
