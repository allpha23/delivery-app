import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';

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
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          {`Data: ${date}`}
        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          {`Status: ${status}`}
        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          {`Price: ${price}`}
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
