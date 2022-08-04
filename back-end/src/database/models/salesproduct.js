const PostCategory = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "salesProduct",
    { sale_id: DataTypes.INTEGER, product_id: DataTypes.INTEGER, quantity: DataTypes.INTEGER },
    { timestamps: false }
  );

  SalesProduct.associate = (models) => {
    models.Sales.belongsToMany(models.Product, {
      as: "products",
      through: SalesProduct,
      foreignKey: "sale_id",
      otherKey: "product_id",
    });

    models.Product.belongsToMany(models.Sales, {
      as: "sales",
      through: SalesProduct,
      foreignKey: "product_id",
      otherKey: "sale_id",
    });
  };

  return SalesProduct;
};

module.exports = PostCategory;
