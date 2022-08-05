"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "sale",
    {
      user_id: { type: DataTypes.INTEGER },
      total_price: DataTypes.DECIMAL(9, 2),
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: { type: DataTypes.DATE, defaultValue: Date.now() },
      status: DataTypes.STRING,
      seller_id: DataTypes.INTEGER,
    },
    { timestamps: false }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, { as: "user", foreignKey: "user_id" });
  };

  return Sale;
};
