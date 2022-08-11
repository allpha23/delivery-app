import React from 'react';

function CartAdress() {
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
          type="text"
          id="address"
          name="address"
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        Numero
        <input
          type="number"
          name="number"
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
}

export default CartAdress;
