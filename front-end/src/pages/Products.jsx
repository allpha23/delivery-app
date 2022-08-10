import React, { useContext, useEffect } from 'react';
import ClientNavegation from '../components/ClientNavegation';
import ProductCard from '../components/ProductCard';
import Context from '../context/Context';
import getProducts from '../services/Products';

export default function Products() {
  const { productData, setProductData } = useContext(Context);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProductData(response.data);
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
          title={ el.name }
          price={ el.price }
          image={ el.urlImage }
          testId={ `customer_products__element-card-price-${index + 1}` }
        />))}
    </>
  );
}
