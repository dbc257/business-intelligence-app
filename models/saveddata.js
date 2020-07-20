'use strict';
module.exports = (sequelize, DataTypes) => {
  const SavedData = sequelize.define('SavedData', {
    revenue: DataTypes.STRING,
    expenses: DataTypes.STRING,
    cost_expenses: DataTypes.STRING,
    gross_profit: DataTypes.STRING,
    company: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  SavedData.associate = function(models) {
    // associations can be defined here
    SavedData.belongsTo(models.User, {foreignKey: "user_id", as: "user"})
  };
  return SavedData;
};