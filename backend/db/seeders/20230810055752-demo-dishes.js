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
      },
      {
        name: 'Chick-fil-A Nuggets',
        storeId: 5,
        price: 7.79,
        calorie: 800,
        categoryId: 2,
        imageUrl:'https://tb-static.uber.com/prod/image-proc/processed_images/e9c73cae7e09dc4561d9721af3641571/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Chick-fil-A Waffle Potato Fries',
        storeId: 5,
        price: 3.89,
        calorie: 500,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/9d27d25b566b0e0a2c2c862d15517f1f/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Spicy Deluxe Sandwich',
        storeId: 5,
        price: 8.95,
        calorie: 800,
        categoryId: 3,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/205e274d7e4f6c9604df63b33b6f01e9/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Chick-fil-A Chicken Sandwich',
        storeId: 5,
        price: 7.65,
        calorie: 800,
        categoryId: 3,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/354bde1069af47eec77a8df67952bf41/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Fruit Cup',
        storeId: 5,
        price: 5.95,
        calorie: 200,
        categoryId: 5,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/a6273b97c52f9b6559dcf90aa6324a09/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Coconut Strawberry Smoothie',
        storeId: 6,
        price: 6.50,
        calorie: 500,
        categoryId: 9,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/9c571b52-35b4-4494-afca-4144ed7b123b.jpeg'
    },{
        name: 'Cookies and Cream Shake',
        storeId: 6,
        price: 6.25,
        calorie: 700,
        categoryId: 9,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/ae139615-04d6-47f1-ac07-07174ede3eb9.jpeg'
    },{
        name: 'Strawberry Matcha Milk Tea',
        storeId: 6,
        price: 5.75,
        calorie: 500,
        categoryId: 9,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/dae5946d-71d4-4374-be26-69f47237a743.jpeg'
    },{
        name: 'Coconut Strawberry Smoothie',
        storeId: 6,
        price: 6.50,
        calorie: 700,
        categoryId: 9,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/9c571b52-35b4-4494-afca-4144ed7b123b.jpeg'
    },{
        name: 'Mango Smoothie',
        storeId: 6,
        price: 6.25,
        calorie: 600,
        categoryId: 9,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/72d9aeff-6990-407c-aa81-bde57320a55c.jpeg'
    },{
        name: 'Cajun Fries',
        storeId: 7,
        price: 4.79,
        calorie: 700,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/3cc9ad8c2b91cfebdfa6cf7b62f4f7a2/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Homestyle Mac & Cheese',
        storeId: 7,
        price: 5.39,
        calorie: 700,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/53a26ee3027f17ebf03376a848f1ca87/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Classic Blackened Bacon & Cheese Chicken Sandwich',
        storeId: 7,
        price: 7.49,
        calorie: 700,
        categoryId: 3,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/676354ec3107a13fbc4afc1824487499/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: '5Pc Handcrafted Tenders Combo',
        storeId: 7,
        price: 17.99,
        calorie: 800,
        categoryId: 2,
        imageUrl: 'hhttps://tb-static.uber.com/prod/image-proc/processed_images/805334c32a9817a136ab4e0b459adf6f/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: '30Pc Signature Chicken Family Meal',
        storeId: 7,
        price: 81.59,
        calorie: 9000,
        categoryId: 2,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/bcfcd18ab8842b57ff82272e0e2b32d8/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: '12" Medium Pizza',
        storeId: 8,
        price: 16.82,
        calorie: 900,
        categoryId: 2,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/08a9ccf207579ed74f0fe6921667e59f/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Cheese Sticks',
        storeId: 8,
        price: 9.99,
        calorie: 1000,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/2289544935f19b101b4d6c5686b2e8e3/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: '6 Traditional Wings',
        storeId: 8,
        price: 13.77,
        calorie: 1000,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/545b44426f1013565d4a76242a6142e7/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'NEW Cheesesteak Melts',
        storeId: 8,
        price: 9.75,
        calorie: 800,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/a7682ea8e82998dbda7348112575da57/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Ranch Dip',
        storeId: 8,
        price: 1.21,
        calorie: 200,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/5b2786ef665d2558858179d5efb7622d/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Spicy Potato Soft Taco',
        storeId: 9,
        price: 1.82,
        calorie: 200,
        categoryId: 1,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/515c7e75-9c62-4992-93c9-6c4adb1dd984.jpeg'
    },{
        name: 'Soft Taco Supreme®',
        storeId: 9,
        price: 3.53,
        calorie: 300,
        categoryId: 1,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/f1be8b7b-5e9b-41dd-8f44-5735ae7e1811.jpeg'
    },{
        name: 'Bean Burrito',
        storeId: 9,
        price: 2.43,
        calorie: 300,
        categoryId: 1,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/9d7bff17-e957-4f92-a2d3-5cb4eedeec34.jpeg'
    },{
        name: 'Beefy Crunch Burrito',
        storeId: 9,
        price: 3.28,
        calorie: 400,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/c9ca5ecb8126fab25707da106033e55e/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Chicken Quesadilla',
        storeId: 9,
        price: 6.82,
        calorie: 600,
        categoryId: 1,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/b443165a-538a-4c51-9960-2ea1a8ec9569.jpeg'
    },{
        name: 'Spicy Tuna Roll(6 pcs)',
        storeId: 10,
        price: 12.60,
        calorie: 600,
        categoryId: 22,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/4d0d41b8-6f6e-4db5-ae47-b994cb5eb11c.jpeg'
    },{
        name: 'Yellowtail with Scallion Roll(6 pcs)',
        storeId: 10,
        price: 12.60,
        calorie: 600,
        categoryId: 22,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/56460585-0469-4504-a90d-4e5325cb7f48.jpeg'
    },{
        name: 'Salmon (2 pcs)',
        storeId: 10,
        price: 11.60,
        calorie: 300,
        categoryId: 22,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/6f2544e1-dbe7-4d91-b373-a83fed52dd7d.jpeg'
    },{
        name: 'Freshwater Eel (2 pcs)',
        storeId: 10,
        price: 11.60,
        calorie: 400,
        categoryId: 22,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/38708f95-ec2f-4efa-adfa-5dbb46dfacff.jpeg'
    },{
        name: 'Salmon Roe (2 pcs)',
        storeId: 10,
        price: 12.60,
        calorie: 200,
        categoryId: 22,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/d6732500-f93b-4a03-ae63-a42daa35faf0.jpeg'
    },{
        name: '番茄炒蛋 sautéed tomato with egg',
        storeId: 11,
        price: 15.99,
        calorie: 500,
        categoryId: 17,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/f3145f0b574044e9985cd1330643cb45/4218ca1d09174218364162cd0b1a8cc1.jpeg'
    },{
        name: '凉拌黄瓜 Cucumber salad',
        storeId: 11,
        price: 13.99,
        calorie: 300,
        categoryId: 17,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/9365389484cc03458ec46bb57c80fa69/b4facf495c22df52f3ca635379ebe613.jpeg'
    },{
        name: '二姐兔丁 Diced Rabbit with Younger Sister\'s Secret Recipe',
        storeId: 11,
        price: 18.99,
        calorie: 700,
        categoryId: 17,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/2064e37944bc97ada2c0d44467da1586/4218ca1d09174218364162cd0b1a8cc1.jpeg'
    },{
        name: '青椒肉丝炒饭 Shredded Pork and Green Pepper Fried Rice',
        storeId: 11,
        price: 15.99,
        calorie: 1000,
        categoryId: 17,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/95484dbad1164b9e5f7f7c3ef60eecd8/4218ca1d09174218364162cd0b1a8cc1.jpeg'
    },{
        name: '牛肉炒面 Stir fried noodle with beef',
        storeId: 11,
        price: 16.99,
        calorie: 1000,
        categoryId: 20,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/7e5e7a720751fb722c10557b5342ee91/4218ca1d09174218364162cd0b1a8cc1.jpeg'
    },{
        name: 'Double-double® w/ Onion',
        storeId: 12,
        price: 5.39,
        calorie: 670,
        categoryId: 3,
        imageUrl: 'https://www.in-n-out.com/Frontend-Assembly/Telerik.Sitefinity.Frontend/content/images/menu/double-double@2x.png?package=INNOUT&v=2023'
    },{
        name: 'HAMBURGER W/ ONION',
        storeId: 12,
        price: 3.99,
        calorie: 390,
        categoryId: 3,
        imageUrl: 'https://www.in-n-out.com/Frontend-Assembly/Telerik.Sitefinity.Frontend/content/images/menu/hamburger@3x.png?package=INNOUT&v=2023'
    },{
        name: 'CHOCOLATE SHAKE',
        storeId: 12,
        price: 3.99,
        calorie: 580,
        categoryId: 9,
        imageUrl: 'https://www.in-n-out.com/Frontend-Assembly/Telerik…images/menu/chocolate-shake@3x.png?package=INNOUT'
    },{
        name: 'STRAWBERRY SHAKE',
        storeId: 12,
        price: 3.99,
        calorie: 590,
        categoryId: 9,
        imageUrl: 'https://www.in-n-out.com/Frontend-Assembly/Telerik.Sitefinity.Frontend/content/images/menu/strawberry-shake@3x.png?package=INNOUT'
    },{
        name: 'PINK LEMONADE',
        storeId: 12,
        price: 2.99,
        calorie: 150,
        categoryId: 9,
        imageUrl: 'https://www.in-n-out.com/Frontend-Assembly/Telerik.Sitefinity.Frontend/content/images/menu/pink-lemonade@3x.png?package=INNOUT'
    },{
        name: '4 PC. Spicy Chicken Nuggets',
        storeId: 13,
        price: 2.43,
        calorie: 300,
        categoryId: 2,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/98a0c33e92e6b6abff1e1f91d004ef8d/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Chili Cheese Fries',
        storeId: 13,
        price: 4.26,
        calorie: 350,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/4f93255c6ac15356c844ebc8c2644cdb/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Cheese Baked Potato',
        storeId: 13,
        price: 4.87,
        calorie: 300,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/48c45d80da089c3ec5d077d07c99299e/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Ghost Pepper Fries',
        storeId: 13,
        price: 3.89,
        calorie: 300,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/40ed4ce717480fb283eacd7af1d53b67/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Apple Bites',
        storeId: 13,
        price: 1.94,
        calorie: 100,
        categoryId: 5,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/06d58c9fe0619293ba0675974df9e78a/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Build Your Own Munchie Meal',
        storeId: 14,
        price: 12.50,
        calorie: 1000,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/61326afd6aaef028f0112e8c8082e7b5/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Large Curly Fry',
        storeId: 14,
        price: 4.86,
        calorie: 400,
        categoryId: 1,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/c2eb46a4-1939-4301-9021-af716938cb32.jpeg'
    },{
        name: 'Large Bacon Ultimate Cheeseburger™ Combo',
        storeId: 14,
        price: 14.85,
        calorie: 820,
        categoryId: 3,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/d0e9c70ed18b370bbe67969f1ca6c7ac/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Chicken Nuggets (8)',
        storeId: 14,
        price: 5.11,
        calorie: 400,
        categoryId: 2,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/3d1e361e44b78cdd548413250da2b2e1/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Double Bacon Sourdough Jack®',
        storeId: 14,
        price: 10.55,
        calorie: 600,
        categoryId: 3,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/478610c220346861c55ea1b01edb99a8/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Tuna',
        storeId: 15,
        price: 7.59,
        calorie: 700,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/43a795867b613f1915742c42ea713ec5/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Oven-Roasted Turkey',
        storeId: 15,
        price: 7.59,
        calorie: 700,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/1b75417fa4c92717f910f910fe23b506/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: '#6 The Boss',
        storeId: 15,
        price: 8.19,
        calorie: 1000,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/b4e2c683e0106788bb13f9cadb3da88d/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Italian B.M.T.®',
        storeId: 15,
        price: 7.59,
        calorie: 100,
        categoryId: 3,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/820c84a9ba7c7ab82b100c37671594e7/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: '#1 The Philly',
        storeId: 15,
        price: 8.49,
        calorie: 700,
        categoryId: 1,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/9b36ab0c0dd90766b57c58f0e8a33a0c/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Butter Croissant',
        storeId: 16,
        price: 4.45,
        calorie: 400,
        categoryId: 7,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/d887b0305178efd47272079624b548ef/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Strawberry Açaí Lemonade Starbucks Refreshers® Beverage',
        storeId: 16,
        price: 5.65,
        calorie: 100,
        categoryId: 9,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/e624b8cb23a5130e5cb271ec22e512a1/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Chocolate Croissant',
        storeId: 16,
        price: 4.65,
        calorie: 500,
        categoryId: 7,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/2b1ccc76529d4ff62316cd07c5848b42/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Iced Chai Tea Latte',
        storeId: 16,
        price: 5.25,
        calorie: 300,
        categoryId: 11,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/d932f9eeeca81e9b68a67a75d2a6b575/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Starbucks® Cold Brew Coffee',
        storeId: 16,
        price: 4.95,
        calorie: 200,
        categoryId: 11,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/ebb1352a99a553b130b7246d1c5e816d/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Orange Chicken',
        storeId: 17,
        price: 15.99,
        calorie: 900,
        categoryId: 17,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/b2f6353e-0cb5-4aeb-bc8f-edc4477eb9f7.jpeg'
    },{
        name: 'BBQ Pork Fried Rice',
        storeId: 17,
        price: 14.99,
        calorie: 900,
        categoryId: 17,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/a54f7b13-d93b-4352-bbe4-8512ba8de06d.jpeg'
    },{
        name: 'Pot Stickers (10 pcs)',
        storeId: 17,
        price: 13.99,
        calorie: 800,
        categoryId: 17,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/12a433e8-9b1c-4758-84b4-b3c031c9607b.jpeg'
    },{
        name: 'Wings (6 pcs)',
        storeId: 17,
        price: 13.99,
        calorie: 800,
        categoryId: 2,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/134ec17f-3e49-4c0a-9dd7-a0bedb845019.jpeg'
    },{
        name: 'Mongolian Chicken',
        storeId: 17,
        price: 15.99,
        calorie: 700,
        categoryId: 17,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/3aa8bb42567ffcf52c55bc88a023995b/4218ca1d09174218364162cd0b1a8cc1.jpeg'
    },{
        name: 'Regular Poke Bowl',
        storeId: 18,
        price: 18.95,
        calorie: 700,
        categoryId: 21,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/531fc2b8-46f2-44b3-9b83-3d631ebbfcc7.jpeg'
    },{
        name: 'Large Poke Bowl',
        storeId: 18,
        price: 21.95,
        calorie: 900,
        categoryId: 21,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/39539447-efaf-4d4b-9c2a-497da097a45f.jpeg'
    },{
        name: 'Miso Soup',
        storeId: 18,
        price: 3.99,
        calorie: 200,
        categoryId: 21,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/5a1b8b8e-a1de-47e4-a68a-30f5b1e867db.jpeg'
    },{
        name: 'Poke Nachos',
        storeId: 18,
        price: 13.99,
        calorie: 500,
        categoryId: 17,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/a38749539a5fd81cb59527aa2cca872b/4218ca1d09174218364162cd0b1a8cc1.jpeg'
    },{
        name: 'Acai Bowl',
        storeId: 18,
        price: 13.99,
        calorie: 600,
        categoryId: 5,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/614f83a6-652c-4267-9dcb-d94cdb2dfbcc.jpeg'
    },{
        name: 'Bold Ramen',
        storeId: 19,
        price: 19.95,
        calorie: 800,
        categoryId: 23,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/11dc7df3ec396b7283122806e2056fb9/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'NEW: Chicken Gyoza',
        storeId: 19,
        price: 9.00,
        calorie: 700,
        categoryId: 21,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/a48cf15753fe6b78f3c37fee6c9e71fe/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Cheeky Ramen',
        storeId: 19,
        price: 19.95,
        calorie: 900,
        categoryId: 23,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/176927fc0b4ebd53bfd6da33459a7203/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Hippie Ramen',
        storeId: 19,
        price: 19.50,
        calorie: 800,
        categoryId: 23,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/27bcaad97a4085d2bd6d53e8a5a9b1c5/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
    },{
        name: 'Fried Rice',
        storeId: 19,
        price: 9.50,
        calorie: 500,
        categoryId: 21,
        imageUrl: 'https://tb-static.uber.com/prod/image-proc/processed_images/24274458e7d46551df5b1bbbe6bb263a/5954bcb006b10dbfd0bc160f6370faf3.jpeg'
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
          'Original Chicken Sandwich',
          'Chick-fil-A Nuggets',
          'Chick-fil-A Waffle Potato Fries',
          'Spicy Deluxe Sandwich',
          'Chick-fil-A Chicken Sandwich',
          'Fruit Cup',
          'Coconut Strawberry Smoothie',
          'Cookies and Cream Shake',
          'Strawberry Matcha Milk Tea',
          'Mango Smoothie',
          'Cajun Fries',
          'Homestyle Mac & Cheese',
          'Classic Blackened Bacon & Cheese Chicken Sandwich',
          '5Pc Handcrafted Tenders Combo',
          '30Pc Signature Chicken Family Meal',
          '12" Medium Pizza',
          'Cheese Sticks',
          '6 Traditional Wings',
          'NEW Cheesesteak Melts',
          'Ranch Dip',
          'Spicy Potato Soft Taco',
          'Soft Taco Supreme®',
          'Bean Burrito',
          'Beefy Crunch Burrito',
          'Chicken Quesadilla',
          'Spicy Tuna Roll(6 pcs)',
          'Yellowtail with Scallion Roll(6 pcs)',
          'Salmon (2 pcs)',
          'Freshwater Eel (2 pcs)',
          'Salmon Roe (2 pcs)',
          '番茄炒蛋 sautéed tomato with egg',
          '凉拌黄瓜 Cucumber salad',
          '二姐兔丁 Diced Rabbit with Younger Sister\'s Secret Recipe',
          '青椒肉丝炒饭 Shredded Pork and Green Pepper Fried Rice',
          '牛肉炒面 Stir fried noodle with beef',
          'Double-double® w/ Onion',
          'HAMBURGER W/ ONION',
          'CHOCOLATE SHAKE',
          'STRAWBERRY SHAKE',
          'PINK LEMONADE',
          '4 PC. Spicy Chicken Nuggets',
          'Chili Cheese Fries',
          'Cheese Baked Potato',
          'Ghost Pepper Fries',
          'Apple Bites',
          'Build Your Own Munchie Meal',
          'Large Curly Fry',
          'Large Bacon Ultimate Cheeseburger™ Combo',
          'Chicken Nuggets (8)',
          'Double Bacon Sourdough Jack®',
          'Tuna',
          'Oven-Roasted Turkey',
          '#6 The Boss',
          'Italian B.M.T.®',
          '#1 The Philly',
          'Butter Croissant',
          'Strawberry Açaí Lemonade Starbucks Refreshers® Beverage',
          'Chocolate Croissant',
          'Iced Chai Tea Latte',
          'Starbucks® Cold Brew Coffee',
          'Orange Chicken',
          'BBQ Pork Fried Rice',
          'Pot Stickers (10 pcs)',
          'Wings (6 pcs)',
          'Mongolian Chicken',
          'Regular Poke Bowl',
          'Large Poke Bowl',
          'Miso Soup',
          'Poke Nachos',
          'Acai Bowl',
          'Bold Ramen',
          'NEW: Chicken Gyoza',
          'Cheeky Ramen',
          'Hippie Ramen',
          'Fried Rice'
        ]
    }
      
    },{});
  }
};
