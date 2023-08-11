'use strict';
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options,[
      { 
        firstName:'Amber',
        lastName:'Demo',
        email:'demo@user.io',
        username:'demoAmber',
        phoneNumber:'1234567890',
        photoUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1139063953331331153/amber-profile_copy.jpg',
        hashedPassword:bcrypt.hashSync('password')
      },
      {
        firstName:'user',
        lastName:'One',
        email:'user1@user.io',
        username:'FakeUser1',
        phoneNumber:'2626262626',
        photoUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1139063953331331153/amber-profile_copy.jpg',
        hashedPassword:bcrypt.hashSync('password2')
      },
      {
        firstName:'user',
        lastName:'Two',
        email:'user2@user.io',
        username:'FakeUser2',
        phoneNumber:'4561237890',
        photoUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1139063953331331153/amber-profile_copy.jpg',
        hashedPassword:bcrypt.hashSync('password3')
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      username:{[Op.in]:['demoAmber','FakeUser1','FakeUser2']},
      
    },{});
  }
};
