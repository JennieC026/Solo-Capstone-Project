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
        content:'Excellent service.',
        starRating:4
      },
      {
        storeId:2,
        userId:2,
        content:'Amazing food!',
        starRating:4
      },{
        storeId:3,
        userId:3,
        content:'good food',
        starRating:5
      },
      {
        storeId:4,
        userId:1,
        content:'Amazing food',
        starRating:4
      },
      {
        storeId:5,
        userId:1,
        content:'Not what I expected.',
        starRating:2
      },
      {
        storeId:6,
        userId:1,
        content:'Decent, but not great.',
        starRating:3
      },
      {
        storeId:7,
        userId:1,
        content:'Great food, great service.',
        starRating:5
      },
      {
        storeId:8,
        userId:1,
        content:'Good food, but not great.',
        starRating:4
      },
      {
        storeId:9,
        userId:1,
        content:'Loved the atmosphere.',
        starRating:5
      },
      {
        storeId:10,
        userId:1,
        content:'Great food, great service.',
        starRating:5
      },
      {
        storeId:11,
        userId:1,
        content:'Tasty dishes.',
        starRating:5
      },
      {
        storeId:12,
        userId:1,
        content:'Great food, great service.',
        starRating:3
      },
      {
        storeId:13,
        userId:2,
        content:'Great food, great service.',
        starRating:5
      },
      {
        storeId:1,
        userId:3,
        content:'Bad food, horrible service.',
        starRating:1
      },
      {
        storeId:14,
        userId:3,
        content:'Great food, great service.',
        starRating:5
      },
      {
        storeId:15,
        userId:1,
        content:'Will definitely come back!',
        starRating:4
      },
      {
        storeId:16,
        userId:1,
        content:'Great food, great service.',
        starRating:3
      },
      
    ])

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'Comments';
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
