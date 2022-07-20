'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Group.init({
    groupName: DataTypes.STRING,
    type: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    location: DataTypes.STRING,
    genre: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};