import React, { useMemo, useState } from 'react';
import propTypes from 'prop-types';
import CartContext from './CartContext';

export default function CartProvider({ children }) {
  const [total, setTotal] = useState(0);

  const stateGlobal = useMemo(() => ({
    total,
    setTotal,
  }), [total]);

  return (
    <CartContext.CartProvider
      value={ stateGlobal }
    >
      { children }
    </CartContext.CartProvider>
  );
}

CartProvider.propTypes = {
  children: propTypes.node.isRequired,
};
