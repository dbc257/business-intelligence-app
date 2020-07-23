"use strict";
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      symbol: DataTypes.STRING,
      date: DataTypes.STRING,
      revenue: DataTypes.INTEGER,
      costAndExpenses: DataTypes.INTEGER,
      grossProfit: DataTypes.INTEGER,
      costOfRevenue: DataTypes.INTEGER,
    },
    {}
  );
  Company.associate = function (models) {
    // associations can be defined here
  };
  return Company;
};
