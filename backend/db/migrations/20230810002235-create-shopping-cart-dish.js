'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShoppingCartDishes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shoppingCartId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'ShoppingCarts',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      dishId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Dishes',
          key:'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
      }
    },options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "ShoppingCartDishes";
    await queryInterface.dropTable(options);
  }
};