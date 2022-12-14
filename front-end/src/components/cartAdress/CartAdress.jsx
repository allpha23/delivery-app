import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import createSale from '../../services/createSale';
import Context from '../../context/Context';
import styles from './styles.module.scss';

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
      const productsQuantity = cart.map((el) => el.quantity);
      const productsId = cart.map((el) => el.id);
      console.log(productsId);

      const sale = await createSale({
        totalPrice: Number(totalPrice),
        deliveryAddress: address,
        deliveryNumber: adrsNumber,
        productsIds: productsId,
        quantity: productsQuantity,
      });
      setSaleId(sale.data.id);
      setRedir(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <form className={ styles.container }>
      <div className={ styles.content }>
        <label htmlFor="seller">
          P. Vendedora
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
            className={ styles.address }
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
            className={ styles.number }
            onChange={ (e) => setAdrsNumber(e.target.value) }
            type="number"
            name="number"
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
      </div>
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
