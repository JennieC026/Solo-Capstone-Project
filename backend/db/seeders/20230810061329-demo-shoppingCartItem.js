'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'ShoppingCartDishes';
    return queryInterface.bulkInsert(options,[
      {
       shoppingCartId:1,
       dishId:1,
       quantity:2
      },
      {
        shoppingCartId:2,
        dishId:2,
        quantity:1  

      },
      {
        shoppingCartId:3,
        dishId:3,
        quantity:3
      }
      
    ])

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'ShoppingCartDishes';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      shoppingCartId: {
        [Op.in]: [
            1,2,3
        ]
    }
      
    },{});
  }
};
