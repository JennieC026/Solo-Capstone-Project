'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'StoreCategories';
    return queryInterface.bulkInsert(options,[
      { 
        parentCategoryId: null,
        categoryName: 'Fast Food',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203577624477696/fast-food_copy.png"
      },
      {
        parentCategoryId: 1,
        categoryName: 'Fried Chicken',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203296656445480/fried-chicken.png"
      },
      {
        parentCategoryId: 1,
        categoryName: 'Burgers',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203295272321094/burger.png"
      },
      {
        parentCategoryId: 1,
        categoryName: 'Pizza',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203578027118633/pizza.png"
      },
      {
        parentCategoryId: null,
        categoryName: 'Desserts',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203296115376228/dessert.png"
      },
      {
        parentCategoryId: 5,
        categoryName: 'Ice Cream',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203296908099635/ice-cream.png"
      },
      {
        parentCategoryId: 5,
        categoryName: 'Pastries',

      },
      {
        parentCategoryId: 5,
        categoryName: 'Cakes',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203295557529681/cake.png"
      },
      {
        parentCategoryId: null,
        categoryName: 'Beverages',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203294966140948/beverage.png"
      },
      {
        parentCategoryId: 9,
        categoryName: 'Soft Drinks',

      },
      {
        parentCategoryId: 9,
        categoryName: 'Coffees & Teas',
      },
      {
        parentCategoryId: 9,
        categoryName: 'Juices',
      },
      {
        parentCategoryId: null,
        categoryName: 'Alcohol',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203294701895742/alcohol.png"
      },
      {
        parentCategoryId: 13,
        categoryName: 'Beers',
      },
      {
        parentCategoryId: 13,
        categoryName: 'Wines',
      },
      {
        parentCategoryId: 13,
        categoryName: 'Liquors',
      },
      {
        parentCategoryId: null,
        categoryName: 'Chinese Food',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153206163559677962/chinese-food.png"
      },
      {
        parentCategoryId: 17,
        categoryName: 'Dim Sum',
      },
      {
        parentCategoryId: 17,
        categoryName: 'Noodles',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153206313401188382/noodle.png"
      },
      {
        parentCategoryId: 17,
        categoryName: 'Stir-fry',
      },
      {
        parentCategoryId: null,
        categoryName: 'Japanese Food',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203297176539197/japanese-food.png"
      },
      {
        parentCategoryId: 21,
        categoryName: 'Sushi',
      },
      {
        parentCategoryId: 21,
        categoryName: 'Ramen',
        categoryImageUrl:"https://cdn.discordapp.com/attachments/811082976501825539/1153203578295566418/ramen.png"
      },
      {
        parentCategoryId: 21,
        categoryName: 'Donburi',
      }
    ])

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'StoreCategories';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      categoryName: {
        [Op.in]: [
            'Fast Food', 
            'Fried Chicken', 
            'Burgers', 
            'Pizza', 
            'Desserts', 
            'Ice Cream',
            'Pastries',
            'Cakes',
            'Beverages',
            'Soft Drinks',
            'Coffees & Teas',
            'Juices',
            'Alcohol',
            'Beers',
            'Wines',
            'Liquors',
            'Chinese Food',
            'Dim Sum', 
            'Noodles',
            'Stir-fry',
            'Japanese Food',
            'Sushi',
            'Ramen',
            'Donburi'
        ]
    }
      
    },{});
  }
};