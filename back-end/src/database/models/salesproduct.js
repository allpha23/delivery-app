const PostCategory = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "salesProduct",
    { 
      saleId: {
        field: "sale_id",
        type: DataTypes.INTEGER,
      }, 
      productId: {
        field: "product_id",
        type: DataTypes.INTEGER,
      }, 
      quantity: DataTypes.INTEGER
    },
    { timestamps: false, underscored: true }
  );

  SalesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: "products",
      through: SalesProduct,
      foreignKey: "saleId",
      otherKey: "productId",
    });

    models.product.belongsToMany(models.sale, {
      as: "sales",
      through: SalesProduct,
      foreignKey: "productId",
      otherKey: "saleId",
    });
  };

  return SalesProduct;
};

module.exports = PostCategory;
