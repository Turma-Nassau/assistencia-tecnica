'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Usuario.init({
    nome_completo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    senha: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        len: [8, 20]
      }
    },
    endereco: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    bairro: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    ponto_de_referencia: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sexo: {
      type: DataTypes.ENUM('M','F'),
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING(11),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};

//module.exports = Usuario;