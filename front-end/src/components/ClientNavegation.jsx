import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

export default function ClientNavegation() {
  const history = useHistory();
  const { userInfo } = useContext(Context);

  return (
    <nav>
      <button
        type="button"
        onClick={ () => history.push('/customer/products') }
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </button>

      <button
        type="button"
        onClick={ () => history.push('/customer/orders') }
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </button>

      <h1
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { userInfo.name }
      </h1>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        {' '}
        LOGOUT
      </button>
    </nav>
  );
}
