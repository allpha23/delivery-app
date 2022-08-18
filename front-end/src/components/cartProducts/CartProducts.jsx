import React, { useContext } from 'react';
import Context from '../../context/Context';
import styles from './styles.module.scss';

function CartProducts() {
  const { cart, setCart } = useContext(Context);

  const priceCheck = cart
    .reduce((price, item) => (Number(item.price) * item.quantity) + price, 0)
    .toFixed(2)
    .replace('.', ',');

  return (
    <div className={ styles.container }>
      <table className={ styles.table }>
        <tr>
          <th className={ styles.thNumber }>Item</th>
          <th className={ styles.thName }>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
        { cart.map((product, i) => (
          <tr className={ styles.content } key={ i + 1 }>
            <td
              className={ styles.number }
              data-testid={
                `customer_checkout__element-order-table-item-number-${i}`
              }
            >
              { i + 1 }
            </td>
            <td
              className={ styles.name }
              data-testid={ `customer_checkout__element-order-table-name-${i}` }
            >
              { product.name }
            </td>
            <td
              className={ styles.quantity }
              data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
            >
              { product.quantity }
            </td>
            <td
              className={ styles.price }
              data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
            >
              { `R$${product.price.replace('.', ',')}` }
            </td>
            <td
              className={ styles.subTotal }
              data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
            >
              { (product.quantity * parseFloat(product.price))
                .toFixed(2)
                .replace('.', ',') }
            </td>
            <td className={ styles.btnRemove }>
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
        <section data-testid="customer_checkout__element-order-total-price">
          { `Total: R$ ${priceCheck}` }
        </section>
      </table>
    </div>
  );
}

export default CartProducts;
