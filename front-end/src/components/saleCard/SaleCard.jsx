import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import formatDate from '../formatDate';
import styles from './styles.module.scss';

export default function SaleCard(props) {
  const { id, date, status, price } = props;
  const history = useHistory();

  return (
    <div
      className={ styles.container }
      onClick={ () => history.push(`/customer/orders/${id}`) }
      aria-hidden="true"
    >
      <div className={ styles.number }>
        <p className={ styles.orderText }>Pedido</p>
        <p
          className={ styles.order }
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          {id}
        </p>
      </div>
      <div className={ styles.status }>
        <p
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          {status}
        </p>
      </div>
      <div className={ styles.info }>
        <p
          className={ styles.data }
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          {formatDate(date)}
        </p>

        <p
          className={ styles.price }
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          {`R$ ${price.replace('.', ',')}`}
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
