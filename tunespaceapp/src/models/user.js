'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    }, 
    lastName:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    }, 
    type: DataTypes.STRING,
    username: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      notNull: true,
      len: [6, 32]
    }
  },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      notNull: true,
    }
  },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: true,
      len: [8, 32]
    }
  },
    dob:{
        type:  DataTypes.DATE,
        validate: {
          isDate: true
        }
    }, 
    location: {
      type:  DataTypes.STRING,
      validate: {}
  }, 
    instrument: {
      type:  DataTypes.STRING,
      validate: {}
  },
    yearsOfExp: DataTypes.INTEGER,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};