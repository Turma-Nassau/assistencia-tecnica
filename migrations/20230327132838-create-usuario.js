'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_completo: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      senha: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          len: [8, 20]
        }
      },
      endereco: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(5),
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      cep: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ponto_de_referencia: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      sexo: {
        type: Sequelize.ENUM('M','F'),
        allowNull: false
      },
      telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};