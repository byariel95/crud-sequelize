'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts',[
      {
        firstname: 'Ariel',
        lastname: 'Monterroso',
        phone: '1248-5445',
        email: 'ariel@correo.net',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'Andry',
        lastname: 'Mazariegos',
        phone: '1248-5578',
        email: 'andry@correo.net',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'Andrea',
        lastname: 'Maldonado',
        phone: '4554-5578',
        email: 'andrea@correo.net',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
