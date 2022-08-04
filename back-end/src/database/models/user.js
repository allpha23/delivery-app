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
    User.hasMany(models.sales, {
      foreignKey: "user_id",
      as: "sales",
    });
  };

  return User;
};
