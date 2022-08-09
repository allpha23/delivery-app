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
      >
        PRODUTOS
      </button>

      <button
        type="button"
        onClick={ () => history.push('/customer/orders') }
      >
        MEUS PEDIDOS
      </button>

      <h1>{ userInfo.name }</h1>
      <button type="button"> LOGOUT</button>
    </nav>
  );
}
