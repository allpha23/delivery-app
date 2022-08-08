"use strict";

const user = require("../models/user");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      total_price: {
        type: Sequelize.DECIMAL(9,2),
      },
      delivery_address: {
        type: Sequelize.STRING,
      },
      delivery_number: {
        type: Sequelize.STRING,
      },
      sale_date: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
      },
      seller_id: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "users",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "users",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sales");
  },
};
