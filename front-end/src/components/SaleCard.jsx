import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import formatDate from './formatDate';

export default function SaleCard(props) {
  const { id, date, status, price } = props;
  const history = useHistory();

  return (
    <div>
      <div onClick={ () => history.push(`/customer/orders/${id}`) } aria-hidden="true">
        <p data-testid={ `customer_orders__element-order-id-${id}` }>
          {`Pedido: ${id}`}
        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          {formatDate(date)}
        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          {`Status: ${status}`}
        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          {price.replace('.', ',')}
        </p>
      </div>
    </div>
  );
}

SaleCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
