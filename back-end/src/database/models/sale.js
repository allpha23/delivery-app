"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "sale",
    {
      userId: { field: "user_id", type: DataTypes.INTEGER },
      totalPrice: { field: "total_price", type: DataTypes.DECIMAL(9, 2) },
      deliveryAddress: { field: "delivery_address", type: DataTypes.STRING },
      deliveryNumber: { field: "delivery_number", type: DataTypes.STRING },
      saleDate: {
        field: "sale_date",
        type: DataTypes.DATE,
        defaultValue: Date.now(),
      },
      status: DataTypes.STRING,
      sellerId: { field: "seller_id", type: DataTypes.INTEGER },
    },
    { timestamps: false, underscored: true }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, { as: "User", foreignKey: "user_id" });
  };

  return Sale;
};
