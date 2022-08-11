import React, { useContext } from 'react';
import Context from '../context/Context';

function CartProducts() {
  const { cart, setCart } = useContext(Context);

  const priceCheck = cart
  .reduce((price, item) => (Number(item.price) * item.quantity) + price, 0).toFixed(2).replace('.', ',');

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
        { cart.map((product, i) => (
          <tr key={ i + 1 }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${i}`
              }
            >
              { i + 1 }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${i}` }
            >
              { product.name }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
            >
              { product.quantity }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
            >
              { `R$${product.price.replace('.', ',')}` }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
            >
              { (product.quantity * parseFloat(product.price))
                .toFixed(2)
                .replace('.', ',') }
            </td>
            <td>
              <button
                data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                type="button"
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
      <section data-testid="customer_checkout__element-order-total-price">
        { priceCheck }
      </section>
    </>
  );
}

export default CartProducts;
