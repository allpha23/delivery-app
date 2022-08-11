import React from 'react';
import CartAdress from '../components/CartAdress';
import CartProducts from '../components/CartProducts';
import ClientNavegation from '../components/ClientNavegation';

function Checkout() {
  return (
    <>
      <ClientNavegation />
      <p>Finalizar Pedido</p>
      <CartProducts />
      <p>Detalhes e endereco para entrega</p>
      <CartAdress />
    </>
  );
}

export default Checkout;
