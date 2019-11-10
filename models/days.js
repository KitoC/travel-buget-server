"use strict";
module.exports = (sequelize, DataTypes) => {
  const days = sequelize.define(
    "days",
    {
      date: DataTypes.STRING,
      budget: DataTypes.FLOAT,
      past: DataTypes.BOOLEAN,
      currencyRate: DataTypes.FLOAT,
      currencyType: DataTypes.STRING
    },
    {}
  );

  days.associate = function(models) {
    days.hasMany(models.expenses, {
      foreignKey: { allowNull: false, name: "dayId" },
      onDelete: "CASCADE",
      as: "expenses"
    });
  };

  days.getIncluded = db => {
    return [
      {
        model: db.expenses,
        as: "expenses",
        required: false,
        attributes: ["id", "name", "amount", "tags", "dayId"]
      }
    ];
  };

  return days;
};
