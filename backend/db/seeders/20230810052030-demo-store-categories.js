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
      },
      {
        parentCategoryId: 1,
        categoryName: 'Fried Chicken',
      },
      {
        parentCategoryId: 1,
        categoryName: 'Burgers',
      },
      {
        parentCategoryId: 1,
        categoryName: 'Pizza',
      },
      {
        parentCategoryId: null,
        categoryName: 'Desserts',
      },
      {
        parentCategoryId: 5,
        categoryName: 'Ice Cream',
      },
      {
        parentCategoryId: 5,
        categoryName: 'Pastries',
      },
      {
        parentCategoryId: 5,
        categoryName: 'Cakes',
      },
      {
        parentCategoryId: null,
        categoryName: 'Beverages',
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
      },
      {
        parentCategoryId: 17,
        categoryName: 'Dim Sum',
      },
      {
        parentCategoryId: 17,
        categoryName: 'Noodles',
      },
      {
        parentCategoryId: 17,
        categoryName: 'Stir-fry',
      },
      {
        parentCategoryId: null,
        categoryName: 'Japanese Food',
      },
      {
        parentCategoryId: 21,
        categoryName: 'Sushi',
      },
      {
        parentCategoryId: 21,
        categoryName: 'Ramen',
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