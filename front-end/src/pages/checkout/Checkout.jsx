import React from 'react';
import CartAdress from '../../components/cartAdress/CartAdress';
import CartProducts from '../../components/cartProducts/CartProducts';
import ClientNavegation from '../../components/clientNavegation/ClientNavegation';
import styles from './styles.module.scss';

function Checkout() {
  return (
    <>
      <ClientNavegation />
      <div className={ styles.container }>
        <div className={ styles.title }>
          <p>Finalizar Pedido</p>
        </div>
        <CartProducts />
        <p>Detalhes e endereco para entrega</p>
        <CartAdress />
      </div>
    </>
  );
}

export default Checkout;
