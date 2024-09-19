//connect to database
const Sequelize = require("sequelize");
const article = require("../models/article");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

//read model data for table representation
const models = require('../models');
//get all data from table
const getAllArticles = (req, res) => {
    models.Article.findAll()
  .then(articles => {
    console.log(articles)
    return res.status(200).json({ articles})
  })
  .catch (error => {
    return res.status(500).send(error.message);
  })
}

//get article by slug
const getArticleBySlug = (req, res) => {
    models.Article.findOne({
        where: {
            slug: req.params.slug
        },
        include: [
        {
            model: models.Author,
            as: 'author' // Use the alias defined in the association
        },
        {
            model: models.Tags,
            through: {
                model: models.ArticleTag
            }
        }
        ],  
    })
    .then(article => {
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
        console.log(article);
        return res.status(200).json({ article });
    })
    .catch(error => {
        return res.status(500).send(error.message);
    });
};


//export controller functions
module.exports = {
    getAllArticles,
    getArticleBySlug
}