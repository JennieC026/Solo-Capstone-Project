'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dish.belongsTo(models.Store,{foreignKey:'storeId'});
      Dish.hasMany(models.DishCategory,{foreignKey:'categoryId'});
      Dish.hasMany(models.Promotion,{foreignKey:'dishId'});
    }
  }
  Dish.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    storeId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    price:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    calorie:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    categoryId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    imageUrl:{
      type:DataTypes.STRING,
      allowNull:true
    }
    
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};