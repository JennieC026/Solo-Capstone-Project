'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DishCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DishCategory.belongsTo(models.DishCategory,{foreignKey:'parentCategoryId'});
      DishCategory.hasMany(models.DishCategory,{foreignKey:'parentCategoryId'});
      DishCategory.hasMany(models.Dish,{foreignKey:'categoryId'});
      // define association here
    }
  }
  DishCategory.init({
    parentCategoryId:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    categoryName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    categoryImageUrl:{
      type:DataTypes.STRING,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'DishCategory',
    defaultScope:{
      attributes:{
        exclude:[ "createdAt", "updatedAt"]
      }
    }
  });
  return DishCategory;
};