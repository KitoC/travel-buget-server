"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("days", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      budget: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      past: {
        type: Sequelize.BOOLEAN
      },
      currencyRate: {
        type: Sequelize.FLOAT
      },
      currencyType: {
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
    return queryInterface.dropTable("days");
  }
};
