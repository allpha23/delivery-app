import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import createSale from '../services/createSale';
import Context from '../context/Context';

function CartAdress() {
  const { cart } = useContext(Context);

  const [address, setAddress] = useState('a');
  const [adrsNumber, setAdrsNumber] = useState(0);
  const [redir, setRedir] = useState(false);
  const [saleId, setSaleId] = useState();

  const totalPrice = cart
    .reduce((price, item) => (Number(item.price) * item.quantity) + price, 0)
    .toFixed(2);

  const createSalenRedirect = async () => {
    try {
      const sale = await createSale(Number(totalPrice), address, adrsNumber);
      console.log(sale.data);
      setSaleId(sale.data.id);
      setRedir(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <form>
      <label htmlFor="seller">
        P. Vendedora Responsavel
        <select
          data-testid="customer_checkout__select-seller"
          name="seller"
          id="seller"
        >
          <option value="Fulana Pereira">Fulana Pereira</option>
        </select>
      </label>
      <label htmlFor="address">
        Endereco
        <input
          onChange={ (e) => setAddress(e.target.value) }
          type="text"
          id="address"
          name="address"
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        Numero
        <input
          onChange={ (e) => setAdrsNumber(e.target.value) }
          type="number"
          name="number"
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ createSalenRedirect }
      >
        FINALIZAR PEDIDO
      </button>

      { redir && <Redirect to={ `/customer/orders/${saleId}` } />}

    </form>
  );
}

export default CartAdress;
