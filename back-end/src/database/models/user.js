"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.sale, {
      foreignKey: "userId",
      as: "User",
    });

    User.hasMany(models.sale, {
      foreignKey: "sellerId",
      as: "Seller"
    })
  };

  return User;
};
