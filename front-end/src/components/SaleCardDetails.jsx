import { PropTypes } from 'prop-types';

export default function SaleCardDetails(props) {
  const { item, quantity, price, name } = props;

  return (
    <tr key={ item }>
      <td
        data-testid={ `customer_order_details__element-order-table-item-number-${item}` }
      >
        {item}
      </td>
      <td data-testid={ `customer_order_details__element-order-table-name-${item}` }>
        {name}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-quantity-${item}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-unit-price-${item}` }
      >
        {`R$${price.replace('.', ',')}`}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-sub-total-${item}` }
      >
        {(quantity * 1 * parseFloat(price)).toFixed(2).replace('.', ',')}
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
