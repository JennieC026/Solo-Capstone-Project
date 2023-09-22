'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Favorites';
    return queryInterface.bulkInsert(options,[
      {
       storeId:1,
        userId:1,
        
      },
      
    ])

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'Favorites';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      userId: {
        [Op.in]: [
            1,2,3
        ]
    }
      
    },{});
  }
};
