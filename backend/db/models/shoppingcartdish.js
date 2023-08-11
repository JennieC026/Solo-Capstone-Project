'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCartDish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShoppingCartDish.belongsTo(models.ShoppingCart,{foreignKey:'orderId'});
      ShoppingCartDish.belongsTo(models.Dish,{foreignKey:'dishId'});
    }
  }
  ShoppingCartDish.init({
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dishId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ShoppingCartDish',
  });
  return ShoppingCartDish;
};