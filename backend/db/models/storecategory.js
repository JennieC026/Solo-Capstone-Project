'use strict';
const{Model,Validator} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StoreCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       StoreCategory.belongsTo(models.StoreCategory,{foreignKey:'parentCategoryId'});
       StoreCategory.hasMany(models.StoreCategory,{foreignKey:'parentCategoryId'});
       StoreCategory.hasMany(models.Store,{foreignKey:'categoryId'});
    }
  }
  StoreCategory.init({
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
    modelName: 'StoreCategory',
    defaultScope:{
      attributes:{
        exclude:[ "createdAt", "updatedAt"]
      }
    }
  });
  return StoreCategory;
};