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
       name: 'Fried Chicken Combo',
       storeId: 1,
        price: 10.99,
        calorie: 1200,
        categoryId: 2,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1139076619919687802/l-intro-1667318305.jpg'
      },
      {
        name:'Chicken Little',
        storeId: 1,
        price: 5.99,
        calorie: 500,
        categoryId: 2,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141577994704523304/image.png'
      },
      {
        name:'3pc Chicken Box',
        storeId: 1,
        price: 16.99,
        calorie: 1450,
        categoryId: 2,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141578932454424698/image.png'
      },
      {
        name:'Fill Up Box',
        storeId: 1,
        price: 24.00,
        calorie: 1200,
        categoryId: 2,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141579516406407188/image.png'
      },
      {
        name:'8pc Nuggets',
        storeId: 1,
        price: 5.99,
        calorie: 300,
        categoryId: 2,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141579071319453836/image.png'
      },
      {
        name:'Classic Chicken Sandwich',
        storeId: 1,
        price: 6.59,
        calorie: 500,
        categoryId: 2,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141579844329689250/image.png'

      },
      {
        name:'Spicy Chicken Sandwich',
        storeId: 1,
        price: 6.59,
        calorie: 550,
        categoryId: 2,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141579844329689250/image.png'

      },
      {
        name:'Pepsi',
        storeId: 1,
        price: 2.29,
        calorie: 200,
        categoryId: 9,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141580200807772200/image.png'
      },
      {
        name:'Sweet Tea',
        storeId: 1,
        price: 2.75,
        calorie: 200,
        categoryId: 9,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141580539132923984/image.png'
      },
      {
        name:"French Fries",
        storeId: 2,
        price: 3.94,
        calorie: 500,
        categoryId: 1,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141528156122120202/image.png'

      },
      {
        name:'Double Cheese Burger',
        storeId: 2,
        price: 4.29,
        calorie: 450,
        categoryId: 3,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141528156122120202/image.png'

      },
      {
        name:'20pc Chicken Nuggets',
        storeId: 2,
        price: 9.10,
        calorie: 830,
        categoryId: 1,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141528217216368800/image.png'
      },
      {
        name:'6pc Chicken Nuggets',
        storeId: 2,
        price: 5.48,
        calorie: 250,
        categoryId: 1,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141528217216368800/image.png'
      },
      {
        name:'McCrispy',
        storeId: 2,
        price: 5.54,
        calorie: 600,
        categoryId: 3,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141528273273241610/image.png'


      },
      {
        name:'Happy Meal',
        storeId: 2,
        price: 5.53,
        calorie: 600,
        categoryId: 1,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141577478507348028/image.png'

      },

      {
        name:'Sprite',
        storeId: 2,
        price: 2.39,
        calorie: 200,
        categoryId: 9,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141575434216149072/image.png'
      },
      {
        name:'Coke',
        storeId: 2,
        price: 2.39,
        calorie: 200,
        categoryId: 9,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141576675340070912/image.png'
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
      },
      {
        name:'Plate',
        storeId: 3,
        price: 12.40,
        calorie: 1100,
        categoryId: 20,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141583808840351835/image.png'
      },
      {
        name:'Bigger Plate',
        storeId: 3,
        price: 14.95,
        calorie: 1300,
        categoryId: 20,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141584059894612018/image.png'
      },
      {
        name:'Bowl',
        storeId: 3,
        price: 10.00,
        calorie: 500,
        categoryId: 17,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141584382361084014/image.png'
      },
      {
        name:'Family Meal',
        storeId: 3,
        price: 43.70,
        calorie: 2100,
        categoryId: 17,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141584746770616360/image.png'

      },
      {
        name:'Chow Mein',
        storeId: 3,
        price: 5.95,
        calorie: 500,
        categoryId: 19,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141584966401142894/image.png'

      },{
        name:'Broccoli Beef',
        storeId: 3,
        price: 4.50,
        calorie: 500,
        categoryId: 18,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141586204547108934/image.png'
      },
      {
        name:'Mushroom Chicken',
        storeId: 3,
        price: 6.20,
        calorie: 500,
        categoryId: 18,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141586863954612224/image.png'
      },{
        name:'Super Greens',
        storeId: 3,
        price: 4.50,
        calorie: 50,
        categoryId: 17,
        imageUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1141587262300241950/image.png'
      },{
        name:'Chicken Fires',
        storeId: 4,
        price: 5.99,
        calorie: 400,
        categoryId: 1,
        imageUrl:'https://media.discordapp.net/attachments/811082976501825539/1141527372915556423/burger-king-chicken-fries-200x300.jpg'
      },{
        name:'King Burger'
        ,storeId: 4,
        price: 6.59,
        calorie: 600,
        categoryId: 3,
        imageUrl:'https://media.discordapp.net/attachments/811082976501825539/1141527373158821958/5d3ee5e83d23bdcd5f1c7240237fa7ab.jpg'
      },{
        name:'Bacon King',
        storeId: 4,
        price: 7.99,
        calorie: 700,
        categoryId: 3,
        imageUrl:'https://media.discordapp.net/attachments/811082976501825539/1141527661668208670/image.png'
      },{
        name:'Original Chicken Sandwich',
        storeId: 4,
        price: 10.59,
        calorie: 1000,
        categoryId: 3,
        imageUrl:'https://media.discordapp.net/attachments/811082976501825539/1141527661924073654/image.png'
      }
    ])

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'Dishes';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      name: {
        [Op.in]: [
          'Fried Chicken Combo',
          'Chicken Little',
          '3pc Chicken Box',
          'Fill Up Box',
          '8pc Nuggets',
          'Classic Chicken Sandwich',
          'Spicy Chicken Sandwich',
          'Pepsi',
          'Sweet Tea',
          'French Fries',
          'Double Cheese Burger',
          '20pc Chicken Nuggets',
          '6pc Chicken Nuggets',
          'McCrispy',
          'Happy Meal',
          'Sprite',
          'Coke',
          'McChicken Combo',
          'Orange Chicken Combo',
          'Plate',
          'Bigger Plate',
          'Bowl',
          'Family Meal',
          'Chow Mein',
          'Broccoli Beef',
          'Mushroom Chicken',
          'Super Greens',
          'Chicken Fires',
          'King Burger',
          'Bacon King',
          'Original Chicken Sandwich'
        ]
    }
      
    },{});
  }
};
