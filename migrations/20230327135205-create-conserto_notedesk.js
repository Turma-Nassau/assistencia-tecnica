'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('conserto_notedesk', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      modelo: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      serialnumber: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      defeito: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      mais_informacoes: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Usuarios',
          key: 'id',
          as: 'userId'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('conserto_notedesk');
  }
};