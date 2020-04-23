'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Rooms', [{
          name: 'Borneo',
          capacity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: 'Java',
          capacity: 35,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: 'Sumatera',
          capacity: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Rooms', null, {});
  }
};
