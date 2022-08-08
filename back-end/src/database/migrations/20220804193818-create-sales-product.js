"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("salesProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'sales'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'products'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("salesProducts");
  },
};
