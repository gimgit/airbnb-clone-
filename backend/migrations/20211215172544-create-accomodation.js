'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accomodations', {
      accomoId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      locationId: {
        type: Sequelize.STRING
      },
      accomoImg: {
        type: Sequelize.STRING
      },
      accomoAdress: {
        type: Sequelize.STRING
      },
      accomoTitle: {
        type: Sequelize.STRING
      },
      accomoInfo1: {
        type: Sequelize.STRING
      },
      accomoInfo2: {
        type: Sequelize.STRING
      },
      accomoRating: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Accomodations');
  }
};