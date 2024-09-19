//connect to database
const Sequelize = require("sequelize");
const Author = require("../models/author");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

//read model data for table representation
const models = require('../models');


//get author by id
const getAuthorbyId = (req, res) => {
    models.Author.findByPk(req.params.id, {
        include: [{
            model: models.Article,
            as: 'articles' // Match the alias defined in Author model
        }],
    })
    .then(author => {
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        return res.status(200).json({ author });
    })
    .catch(error => {
        return res.status(500).send(error.message);
    });
};

// Get author by id
/*const getAuthorbyId = (req, res) => {
    models.Author.findAll()
  .then(authors => {
    console.log(authors)
    return res.status(200).json({authors})
  })
  .catch (error => {
    return res.status(500).send(error.message);
  })
}*/


//export controller functions
module.exports = {
    getAuthorbyId
}