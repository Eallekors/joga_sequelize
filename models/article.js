'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Author, {
        foreignKey: {
          name: 'author_id', // Foreign key in Article
          field: 'author_id', // Field name in the database
        },
        as: 'author', // Alias for the association
      })

      this.belongsToMany(models.Tags, {
          foreignKey: 'articleId',
          through: 'ArticleTags',
        })
    }
  }
  Article.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull:false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    published: {
      type: DataTypes.DATE,
      allowNull:false
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Authors', // Reference the Authors table
        key: 'id' // Reference the primary key of the Authors table
      }
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};