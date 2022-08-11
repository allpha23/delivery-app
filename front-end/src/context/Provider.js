import React, { useMemo, useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [productData, setProductData] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', role: '', token: '' });
  const [cart, setCart] = useState([]);

  const stateGlobal = useMemo(() => ({
    userInfo,
    setUserInfo,
    productData,
    setProductData,
    cart,
    setCart,
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
