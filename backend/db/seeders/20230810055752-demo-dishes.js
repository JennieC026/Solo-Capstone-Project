'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Dishes';
    return queryInterface.bulkInsert(options,[
      {
       name: 'Fired Chicken Combo',
       storeId: 1,
        price: 10.99,
        calorie: 1200,
        categoryId: 2,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1139076619919687802/l-intro-1667318305.jpg'
      },
      {
       name:"McChicken Combo",
        storeId: 2,
        price: 8.99,
        calorie: 1000,
        categoryId: 3,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1139076984811560960/download.jpg'
      },
      {
       name:"Orange Chicken Combo",
        storeId: 3,
        price: 9.99,
        calorie: 1100,
        categoryId: 17,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1139074049515991100/ST-PandaExpress-KeyFeatures-640x356.jpg'
      }
    ])

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'Dishes';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      name: {
        [Op.in]: [
            'Fired Chicken Combo',
            'McChicken Combo',
            'Orange Chicken Combo'
        ]
    }
      
    },{});
  }
};
