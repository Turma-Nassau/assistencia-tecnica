'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class consertonotedesk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  consertonotedesk.init({
    marca: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    serialnumber: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    defeito: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    mais_informacoes: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'consertonotedesk',
  });
  return consertonotedesk;
};