'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
   return Promise.all([
    queryInterface.bulkInsert('Authors', [{
      name: 'Ashley Galvin'
  
    }]),
    queryInterface.bulkInsert('Authors', [{
      name: 'Patrick Beach'
     
    }]),
    queryInterface.bulkInsert('Authors', [{
      name: 'MacKenzie Miller'
     
    }]),
   ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
