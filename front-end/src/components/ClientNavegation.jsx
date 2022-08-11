import React from 'react';
import { useHistory } from 'react-router-dom';
import local from '../helpers/setLocalStorage';

export default function ClientNavegation() {
  const history = useHistory();
  const getName = local();

  const logoutHandler = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

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
        { getName.name }
      </h1>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logoutHandler }
      >
        {' '}
        LOGOUT
      </button>
    </nav>
  );
}
