import React, { useEffect, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [productData, setProductData] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', role: '', token: '' });
  const [cart, setCart] = useState([]); // [{name, quantity, price}, {...}]
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const priceCheck = cart
      .reduce((price, item) => (Number(item.price) * item.quantity) + price, 0);
    setCartTotal(priceCheck);
    console.log('Cart =>', cart, 'Total Price =>', cartTotal);
  }, [cart]);

  const stateGlobal = useMemo(() => ({
    userInfo,
    setUserInfo,
    productData,
    setProductData,
    cart,
    setCart,
    cartTotal,
  }), [productData, userInfo, cart]);

  return (
    <Context.Provider
      value={ stateGlobal }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};
