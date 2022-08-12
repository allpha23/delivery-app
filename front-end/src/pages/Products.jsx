import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ClientNavegation from '../components/ClientNavegation';
import ProductCard from '../components/ProductCard';
import Context from '../context/Context';
import getProducts from '../services/Products';

export default function Products() {
  const { productData, setProductData, cart } = useContext(Context);
  const [redir, setRedir] = useState(false);

  const priceCheck = cart
    .reduce((price, item) => (Number(item.price) * item.quantity) + price, 0)
    .toFixed(2)
    .replace('.', ',');

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
        data-testid="customer_products__button-cart"
        onClick={ () => setRedir(true) }
        disabled={ cart.length === 0 }
      >
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          { priceCheck }
        </p>
      </button>
      {redir && <Redirect to="/customer/checkout" />}
    </>
  );
}
