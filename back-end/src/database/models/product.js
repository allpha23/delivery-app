"use strict";

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4,2),
      url_image: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  // Product.associate = (models) => {
  //   Product.hasMany(models.sales, {
  //     foreignKey: "user_id",
  //     as: "sales",
  //   });
  // };

  return Product;
};
