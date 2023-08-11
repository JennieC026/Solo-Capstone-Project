'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'shoppingCarts';
    return queryInterface.bulkInsert(options,[
      {
       userId:1,
      },
      {
       userId:1,
      },
      {
        userId:2,
      }
      
    ])

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'shoppingCarts';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      userId: {
        [Op.in]: [
            1,2
        ]
    }
      
    },{});
  }
};
