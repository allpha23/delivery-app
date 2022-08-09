import React, { useContext, useEffect } from 'react';
import ClientNavegation from '../components/ClientNavegation';
import ProductCard from '../components/ProductCard';
import Context from '../context/Context';
import getProducts from '../services/Products';

export default function Products() {
  const { productData, setProductData } = useContext(Context);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProductData(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ClientNavegation />
      { productData?.map((el, index) => (
        <ProductCard
          key={ index }
          title={ el.title }
          price={ el.price }
          image={ el.image }
          testId={ `customer_products__element-card-price-${index + 1}` }
        />))}
    </>
  );
}
