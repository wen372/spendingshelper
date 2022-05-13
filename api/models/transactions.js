const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {}

  transactions.init({
    date: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },   
    amount: { type: DataTypes.STRING },
    remaining: { type: DataTypes.STRING },
    userPK : {type:DataTypes.INTEGER}
    }, {
    sequelize,
    modelName: 'transactions'
  });

  transactions.associate = (models) => {
    // associations can be defined here
  };

  return transactions;
};