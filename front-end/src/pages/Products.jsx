import React, { useContext } from 'react';
import ClientNavegation from '../components/ClientNavegation';
import ProductCard from '../components/ProductCard';
import Context from '../context/Context';

export default function Products() {
  const { productData } = useContext(Context);

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
