import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ClientNavegation from '../../components/clientNavegation/ClientNavegation';
import ProductCard from '../../components/productCard/ProductCard';
import Context from '../../context/Context';
import getProducts from '../../services/Products';
import styles from './styles.module.scss';

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
      <div className={ styles.container }>
        { productData?.map((el, index) => (
          <ProductCard
            key={ index }
            title={ el.name }
            price={ el.price }
            image={ el.urlImage }
            testId={ index + 1 }
            id={ el.id }
          />))}

        <button
          className={ styles.button }
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => setRedir(true) }
          disabled={ cart.length === 0 }
        >
          <p
            data-testid="customer_products__checkout-bottom-value"
          >
            { `Ver carrinho R$ ${priceCheck}` }
          </p>
        </button>
      </div>
      {redir && <Redirect to="/customer/checkout" />}
    </>
  );
}
