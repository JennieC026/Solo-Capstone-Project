'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Store.belongsTo(models.StoreCategory,{foreignKey:'categoryId'});
      Store.hasMany(models.Dish,{foreignKey:'storeId'});
      Store.hasMany(models.Comment,{foreignKey:'storeId'});
      Store.hasMany(models.ShoppingCart,{foreignKey:'storeId'});
    }
  }
  Store.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    address:{
      type:DataTypes.STRING,
      allowNull:false
    },
    categoryId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    costLevel:{
      type:DataTypes.ENUM('$','$$','$$$','$$$$'),
      allowNull:false,
    },
    deliveryFee:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    coverUrl:{
      type:DataTypes.STRING,
      allowNull:true
    },
    bannerUrl:{
      type:DataTypes.STRING,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};