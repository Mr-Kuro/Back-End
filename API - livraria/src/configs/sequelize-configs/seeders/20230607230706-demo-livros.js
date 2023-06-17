module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Livros",
      [
        {
          titulo: "Bleach",
          autor_id: "1",
          editora: "Shounen Jump",
          numeroPaginas: 667,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          titulo: "Burn the Witcher",
          autor_id: "1",
          editora: "Shounen Jump",
          numeroPaginas: 334,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Livros", null, {});
  },
};
