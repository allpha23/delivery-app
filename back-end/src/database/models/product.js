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
      urlImage: {
        field: 'url_image',
        type: DataTypes.STRING,
      }
    },
    { 
      underscored: true, 
      timestamps: false,
    }
  );

  // Product.associate = (models) => {
  //   Product.hasMany(models.sales, {
  //     foreignKey: "sale_id",
  //     as: "sales",
  //   });
  // };

  return Product;
};
