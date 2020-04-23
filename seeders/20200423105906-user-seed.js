'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Users', [{
          first_name: 'Budi',
          last_name: 'Budiman',
          gender: 'Male',
          phone_number: '082282547715',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          first_name: 'Rini',
          last_name: 'Wati',
          gender: 'Female',
          phone_number: '082282547715',
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
     return queryInterface.bulkDelete('Users', null, {});
  }
};
