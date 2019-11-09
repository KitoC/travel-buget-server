"use strict";
module.exports = (sequelize, DataTypes) => {
  const expenses = sequelize.define(
    "expenses",
    {
      name: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      tags: DataTypes.JSON,
      dayId: DataTypes.INTEGER
    },
    {}
  );

  expenses.associate = function(models) {
    expenses.belongsTo(models.days, {
      targetKey: "id",
      foreignKey: { allowNull: false, name: "dayId" },
      onDelete: "CASCADE",
      as: "days"
    });
  };
  return expenses;
};
