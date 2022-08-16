import React from 'react';
import { useHistory } from 'react-router-dom';
import local from '../../helpers/setLocalStorage';
import styles from './styles.module.scss';

export default function ClientNavegation() {
  const history = useHistory();
  const getName = local();

  const logoutHandler = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <nav className={ styles.container }>
      <div className={ styles.products }>
        <button
          className={ styles.btnProduct }
          type="button"
          onClick={ () => history.push('/customer/products') }
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </button>

        <button
          className={ styles.btnOrder }
          type="button"
          onClick={ () => history.push('/customer/orders') }
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </button>
      </div>

      <div className={ styles.client }>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { getName.name }
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logoutHandler }
        >
          {' '}
          Sair
        </button>
      </div>
    </nav>
  );
}
