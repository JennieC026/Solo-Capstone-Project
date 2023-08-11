'use strict';
const{Model,Validator} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.ShoppingCart,{foreignKey:'userId'});
      User.hasMany(models.Comment,{foreignKey:'userId'});
    }
  }
  User.init({
    firstName:{
      type:DataTypes.STRING,
      allowNull:false,

    },
    lastName:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    username: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmail:function(value){
          if(Validator.isEmail(value)){
            throw new Error('Cannot be an email');
          }
        },
        len:[4,30]
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[3,256],
        isEmail:true
      }
    },
    hashedPassword:{ 
      type:DataTypes.STRING.BINARY,
    allowNull:false,
    validate:{
      len:[60,60]
    }
  },
    phoneNumber:{
      type:DataTypes.STRING,
      allowNull:false, 
      validate:{
        len:[10,11]
      }

    },
    photoUrl:{
      type:DataTypes.STRING,
      allowNull:true,
      validate:{
        isUrl:true
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope:{
      attributes:{
        exclude:["hashedPassword", "email", "createdAt", "updatedAt"]
      }
    }
  });
  return User;
};