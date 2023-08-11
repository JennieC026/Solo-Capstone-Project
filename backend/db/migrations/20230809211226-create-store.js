'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      address: {
        type: Sequelize.STRING,
        allowNull:false
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'StoreCategories',
          key:'id'
        }
      },
      costLevel: {
        type: Sequelize.ENUM,
        allowNull:false,
        values:['$','$$','$$$','$$$$']
      },
      deliveryFee: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      coverUrl: {
        type: Sequelize.STRING,
        allowNull:true
      },
      bannerUrl: {
        type: Sequelize.STRING,
        allowNull:true
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
    options.tableName = "Stores";
    await queryInterface.dropTable(options);
  }
};