import { PropTypes } from 'prop-types';
import styles from './styles.module.scss';

export default function SaleCardDetails(props) {
  const { item, quantity, price, name } = props;

  return (
    <tr className={ styles.container } key={ item }>
      <td
        className={ styles.number }
        data-testid={ `customer_order_details__element-order-table-item-number-${item}` }
      >
        {item}
      </td>
      <td
        className={ styles.name }
        data-testid={ `customer_order_details__element-order-table-name-${item}` }
      >
        {name}
      </td>
      <td
        className={ styles.quantity }
        data-testid={ `customer_order_details__element-order-table-quantity-${item}` }
      >
        {quantity}
      </td>
      <td
        className={ styles.price }
        data-testid={ `customer_order_details__element-order-table-unit-price-${item}` }
      >
        {`R$${price.replace('.', ',')}`}
      </td>
      <td
        className={ styles.subTotal }
        data-testid={ `customer_order_details__element-order-sub-total-${item}` }
      >
        {`R$ ${(quantity * 1 * parseFloat(price)).toFixed(2).replace('.', ',')}`}
      </td>
    </tr>
  );
}

SaleCardDetails.propTypes = {
  item: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
