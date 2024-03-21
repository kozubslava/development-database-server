"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("heroes_to_images", {
      heroId: {
        type: Sequelize.INTEGER,
        field: "hero_id",
        allowNull: false,
        primaryKey: true,
        references: {
          model: {
            tableName: "heroes",
          },
          key: "id",
        },
      },
      imageId: {
        type: Sequelize.INTEGER,
        field: "image_id",
        allowNull: false,
        primaryKey: true,
        references: {
          model: {
            tableName: "images",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("heroes_to_images");
  },
};
