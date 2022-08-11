import React, { useContext } from 'react';
import Context from '../context/Context';

function CartProducts() {
  const { cart, setCart } = useContext(Context);

  return (
    <>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
        { cart.map((product,i) => (
          <tr>
            <td data-testid={`customer_checkout__element-order-table-item-number-${i+ 1}`}>{ i + 1 }</td>
            <td data-testid={`customer_checkout__element-order-table-name-${i+ 1}`}>{ product.name }</td>
            <td data-testid={`customer_checkout__element-order-table-quantity-${i+1}`}>{ product.quantity }</td>
            <td data-testid={`customer_checkout__element-order-table-unit-price-${i+1}`}>{ product.price }</td>
            <td data-testid={`customer_checkout__element-order-table-sub-total-${i+1}`}>{ product.price * product.quantity }</td>
            <td>
              <button
                data-testid={`customer_checkout__element-order-table-remove-${i+1}`}
                type='button'
                onClick={ () => {
                  const removed = cart.filter((p) => p.name !== product.name);
                  setCart(removed);
                } }
              >
                Remover
              </button>
            </td>
          </tr>
        )) }
      </table>
    </>
  );
}

export default CartProducts;
