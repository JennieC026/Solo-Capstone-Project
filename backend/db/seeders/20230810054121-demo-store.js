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
      },
      {
        name:'Burger King',
        address: '333 Burger St',
        categoryId:3,
        costLevel:'$',
        deliveryFee: 4,
        coverUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141529083029770370/burger-king_9.jpg',
        bannerUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141528844147380234/image.png'
      },
      {
        name:'Chick-Fil-A',
        address: '572 Chicken Ave',
        categoryId:1,
        costLevel:'$$',
        deliveryFee: 5,
        coverUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141529818450628639/1bacf3c91db0704dc4cbec40d791c17a.jpg',
        bannerUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141529818450628639/1bacf3c91db0704dc4cbec40d791c17a.jpg'
      },
      {
        name: "Llama Boba",
        address: "123 Boba St",
        categoryId: 11,
        costLevel: "$",
        deliveryFee: 2,
        coverUrl: "https://media.discordapp.net/attachments/811082976501825539/1141541532353183815/llama-boba_copy.jpg",
        bannerUrl: "https://media.discordapp.net/attachments/811082976501825539/1141542389371129986/llama-boba-banner_copy.jpg?width=705&height=133"
      },
      {
        name:'Popeyes',
        address: '263 Chicken Blvd',
        categoryId:2,
        costLevel:'$$',
        deliveryFee: 5,
        coverUrl:'https://media.discordapp.net/attachments/811082976501825539/1141530158143119540/70a31f53e60031869b42eb678233f483.jpg',
        bannerUrl:'https://media.discordapp.net/attachments/811082976501825539/1141530158143119540/70a31f53e60031869b42eb678233f483.jpg'
      },
      {
        name:'Pizza Hut',
        address: '186 Pizza St',
        categoryId:4,
        costLevel:'$$',
        deliveryFee: 4,
        coverUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141530487903485982/c6c061c5d2f61e9acf174b0ee408254c.jpg',
        bannerUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141530487903485982/c6c061c5d2f61e9acf174b0ee408254c.jpg'

      },
      {
        name:'Taco Bell',
        address: '457 Taco Ave',
        categoryId:1,
        costLevel:'$',
        deliveryFee: 4,
        coverUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141531246858620969/ec35fe47c65fcd3eff68108a440f9bfe.jpg',
        bannerUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141531246858620969/ec35fe47c65fcd3eff68108a440f9bfe.jpg'

      },
      {
        name:'Sushi King',
        address: '881 Sushi St',
        categoryId:22,
        costLevel:'$$$',
        deliveryFee: 6,
        coverUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141532027552792628/442f9d091eaeb40c8d618f55773bffcd.jpg',
        bannerUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141532027552792628/442f9d091eaeb40c8d618f55773bffcd.jpg'
      },
      {
        name:"Chengdu Taste",
        address: '26 Chengdu St',
        categoryId:17,
        costLevel:'$$$',
        deliveryFee: 6,
        coverUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141532807907250236/1094b604f1fffaca5ed07c737351d538.jpg',
        bannerUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141532807907250236/1094b604f1fffaca5ed07c737351d538.jpg'
      },
      {
        name:'In-N-Out',
        address: '233 In-N-Out St',
        categoryId:3,
        costLevel:'$',
        deliveryFee: 2,
        coverUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141533273865068615/089447809046c11867a1b823aafd6cad.jpg',
        bannerUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141533273865068615/089447809046c11867a1b823aafd6cad.jpg'
      },
      {
        name:'Wendys',
        address: '543 Wendys St',
        categoryId:2,
        costLevel:'$',
        deliveryFee: 2,
        coverUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141535656372338789/904856dd0ce5ef87e6c52b804779e92e.jpg",
        bannerUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141535656372338789/904856dd0ce5ef87e6c52b804779e92e.jpg"

      },
      {
        name:'Jack in the Box',
        address: '643 Jack St',
        categoryId:1,
        costLevel:'$',
        deliveryFee: 4,
        coverUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141536041585618955/234d0d4eb26fd3c937ae0e5d964a1397.jpg",
        bannerUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141536041585618955/234d0d4eb26fd3c937ae0e5d964a1397.jpg"

      },
      {
        name:'Subway',
        address: '153 Subway St',
        categoryId:1,
        costLevel:'$',
        deliveryFee: 3,
        coverUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141536309463232542/f5bd5510b2a1c2dac5470a3a813cfed0.jpg",
        bannerUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141536309463232542/f5bd5510b2a1c2dac5470a3a813cfed0.jpg"

      },
      {
        name:'Starbucks',
        address: '154 Starbucks St',
        categoryId:5,
        costLevel:'$$$',
        deliveryFee: 2,
        coverUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141536837022797914/7e507eda61f1724cf5e4d41a031412c4.jpg",
        bannerUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141536837022797914/7e507eda61f1724cf5e4d41a031412c4.jpg"
      },
      {
        name:'Golden Panda',
        address: '174 Panda St',
        categoryId:17,
        costLevel:'$$',
        deliveryFee: 5,
        coverUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141537285339353148/5926e47e1d0aaa10e88fcf592e78501f.jpg",
        bannerUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141537285339353148/5926e47e1d0aaa10e88fcf592e78501f.jpg"
      },
      {
        name:'Poke Bowl House',
        address: '148 Poke St',
        categoryId:21,
        costLevel:'$$',
        deliveryFee: 5,
        coverUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141537709790347285/cca3193ab5fb92957bf44cd70db98dba.jpg",
        bannerUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141537709790347285/cca3193ab5fb92957bf44cd70db98dba.jpg"
      },
      {
        name:'Reiko Ramen',
        address: '148 Ramen St',
        categoryId:23,
        costLevel:'$$$',
        deliveryFee: 5,
        coverUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141538448117874768/ddda33184207ca345095780c79fca77c.jpg",
        bannerUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1141538448117874768/ddda33184207ca345095780c79fca77c.jpg"


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
          'Panda Express',
          'Burger King',
          'Chick-Fil-A',
          'Llama Boba',
          'Popeyes',
          'Pizza Hut',
          'Taco Bell',
          'Sushi King',
          'Chengdu Taste',
          'In-N-Out',
          'Wendys',
          'Jack in the Box',
          'Subway',
          'Starbucks',
          'Golden Panda',
          'Poke Bowl House',
          'Reiko Ramen'
        ]
    }
      
    },{});
  }
};
