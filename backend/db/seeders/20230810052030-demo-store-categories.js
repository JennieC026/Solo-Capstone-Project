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
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/fast-food%20copy.png"
      },
      {
        parentCategoryId: 1,
        categoryName: 'Fried Chicken',
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/fried-chicken.png"
      },
      {
        parentCategoryId: 1,
        categoryName: 'Burgers',
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/burger.png"
      },
      {
        parentCategoryId: 1,
        categoryName: 'Pizza',
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/pizza.png"
      },
      {
        parentCategoryId: null,
        categoryName: 'Desserts',
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/dessert.png"
      },
      {
        parentCategoryId: 5,
        categoryName: 'Ice Cream',
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/ice-cream.png"
      },
      {
        parentCategoryId: 5,
        categoryName: 'Pastries',

      },
      {
        parentCategoryId: 5,
        categoryName: 'Cakes',
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/cake.png"
      },
      {
        parentCategoryId: null,
        categoryName: 'Beverages',
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/beverage.png"
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
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/alcohol.png"
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
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/chinese-food.png"
      },
      {
        parentCategoryId: 17,
        categoryName: 'Dim Sum',
      },
      {
        parentCategoryId: 17,
        categoryName: 'Noodles',
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/noodle.png"
      },
      {
        parentCategoryId: 17,
        categoryName: 'Stir-fry',
      },
      {
        parentCategoryId: null,
        categoryName: 'Japanese Food',
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/japanese-food.png"
      },
      {
        parentCategoryId: 21,
        categoryName: 'Sushi',
      },
      {
        parentCategoryId: 21,
        categoryName: 'Ramen',
        categoryImageUrl:"https://storage.googleapis.com/jennie_profolio/capstone_amberEat/category_icons/ramen.png"
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