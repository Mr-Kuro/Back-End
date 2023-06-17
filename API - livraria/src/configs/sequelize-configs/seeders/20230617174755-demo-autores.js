"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Autores",
      [
        {
          nome:  "Titi Kubo",
          nacionalidade:"Japão",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome:  "Akira Toryama",
          nacionalidade: "Japão",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
