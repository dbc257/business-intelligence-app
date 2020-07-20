'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SavedData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      revenue: {
        type: Sequelize.STRING
      },
      expenses: {
        type: Sequelize.STRING
      },
      cost_expenses: {
        type: Sequelize.STRING
      },
      gross_profit: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SavedData');
  }
};