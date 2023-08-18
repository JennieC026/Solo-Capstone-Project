'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShoppingCart.belongsTo(models.User,{foreignKey:'userId'});
      ShoppingCart.hasMany(models.ShoppingCartDish,{foreignKey:'shoppingCartId',onDelete: 'CASCADE'});
      ShoppingCart.belongsTo(models.Store,{foreignKey:'storeId'});
    }
  }
  ShoppingCart.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('open','processing', 'closed'),
      defaultValue: 'open',
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ShoppingCart',
  });
  return ShoppingCart;
};