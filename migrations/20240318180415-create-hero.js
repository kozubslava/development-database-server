'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      realName: {
        type: Sequelize.STRING,
        field: 'real_name',
        allowNull: false,
      },
      originDescription: {
        type: Sequelize.TEXT,
        field: 'origin_description',
      },
      catchPhrase: {
        type: Sequelize.TEXT,
        field: 'catch_phrase',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field:'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('heros');
  }
};