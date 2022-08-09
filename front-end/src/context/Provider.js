/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const url = 'https://images-americanas.b2w.io/produtos/01/00/img/47974/3/47974319_1GG.jpg';
  const mockObject = [
    { title: 'Cerveja', price: 5.70, image: url },
    { title: 'Cerveja', price: 5.60, image: url },
    { title: 'Cerveja', price: 5.20, image: url },
    { title: 'Cerveja', price: 5.10, image: url },
    { title: 'Cerveja', price: 5.67, image: url },
    { title: 'Cerveja', price: 5.80, image: url }];

  const [productData, setProductData] = useState(mockObject);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', role: '', token: '' });

  const stateGlobal = useMemo(() => ({
    userInfo,
    setUserInfo,
    productData,
    setProductData,
  }), [productData, userInfo]);

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
