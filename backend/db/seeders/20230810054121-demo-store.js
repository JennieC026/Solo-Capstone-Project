'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Stores';
    return queryInterface.bulkInsert(options,[
      {
        name: 'Kentucky Fired Chicken',
        address: '123 Disney St',
        categoryId:2,
        costLevel:'$$',
        deliveryFee: 5,
        coverUrl: 'https://cdn.discordapp.com/attachments/811082976501825539/1139072392845611069/deals.jpg',
        bannerUrl: 'https://cdn.discordapp.com/attachments/811082976501825539/1139072702158745671/images.jpg'
      },
      {
        name: 'McDonalds',
        address: '111 Burger Ave',
        categoryId:3,
        costLevel:'$',
        deliveryFee: 4,
        coverUrl: 'https://cdn.discordapp.com/attachments/811082976501825539/1139073460899938314/images_1.jpg',
        bannerUrl: 'https://cdn.discordapp.com/attachments/811082976501825539/1139073595788754974/images_2.jpg'
      },
      {
        name:'Panda Express',
        address: '222 Panda St',
        categoryId:17,
        costLevel:'$$',
        deliveryFee: 6,
        coverUrl: 'https://cdn.discordapp.com/attachments/811082976501825539/1139074049515991100/ST-PandaExpress-KeyFeatures-640x356.jpg',
        bannerUrl: 'https://cdn.discordapp.com/attachments/811082976501825539/1139074041316114507/flatten.jpg'
      }
    ])

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'Stores';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      name: {
        [Op.in]: [
            'Kentucky Fired Chicken',
            'McDonalds',
            'Panda Express'
        ]
    }
      
    },{});
  }
};
