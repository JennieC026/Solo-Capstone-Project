'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Comments';
    return queryInterface.bulkInsert(options,[
      {
       storeId:1,
        userId:1,
        content:'good food',
        starRating:5
      },
      {
        storeId:1,
        userId:2,
        content:'bad food',
        starRating:1
      },
      {
        storeId:2,
        userId:2,
        content:'like it',
        starRating:4
      }
      
    ])

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'Comments';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      content: {
        [Op.in]: [
            "good food","bad food","like it"
        ]
    }
      
    },{});
  }
};
