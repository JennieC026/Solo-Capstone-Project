'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Promotion.belongsTo(models.Dish,{foreignKey:'dishId'});
      
    }
  }
  Promotion.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    description:{
      type:DataTypes.STRING,
    },
    dishId: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    discountRate: {
      type: DataTypes.DECIMAL,
      allowNull:false,
    },
    startDate: {
      type: DataTypes.DATE, 
      allowNull:false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Promotion',
  });
  return Promotion;
};