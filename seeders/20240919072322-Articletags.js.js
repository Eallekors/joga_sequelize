'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
   return Promise.all([
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 7,
      tagId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 7,
      tagId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 8,
      tagId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 8,
      tagId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 9,
      tagId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 9,
      tagId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('ArticleTags', [{
      articleId: 9,
      tagId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    
   ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ArticleTags', null, {});
  }
};
