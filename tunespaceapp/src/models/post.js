'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    title:{ 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [1, 500]
      }
    },
    content: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [1, 500]
      }
    },
    media: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};