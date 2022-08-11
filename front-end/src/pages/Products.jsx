import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ClientNavegation from '../components/ClientNavegation';
import ProductCard from '../components/ProductCard';
import Context from '../context/Context';
import getProducts from '../services/Products';

export default function Products() {
  const { productData, setProductData } = useContext(Context);
  const [redir, setRedir] = useState(false);

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
          testId={ index + 1 }
        />))}

      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        onClick={ () => setRedir(true) }
      >
        Ver carrinho -
        {' '}
        { }
      </button>
      {redir && <Redirect to="/customer/checkout" />}
    </>
  );
}
