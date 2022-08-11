import React from 'react';
import CartProducts from '../components/CartProducts';
import ClientNavegation from '../components/ClientNavegation';

function Checkout() {
  return (
    <>
      <ClientNavegation />
      <CartProducts />
    </>
  );
}

export default Checkout;
