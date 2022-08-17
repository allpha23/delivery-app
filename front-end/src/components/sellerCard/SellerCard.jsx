import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import formatDate from '../formatDate';
import styles from './styles.module.scss';

export default function SellerCard(props) {
  const { id, date, status, price, address } = props;
  const [isPreper, setIsPreper] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const history = useHistory();

  const handleStatus = () => {
    if (status === 'Preparando') setIsPreper(true);
    if (status === 'Entregue') setIsDelivered(true);
  };

  useEffect(() => {
    handleStatus();
  }, []);

  return (
    <div
      className={ styles.container }
      onClick={ () => history.push(`/seller/orders/${id}`) }
      aria-hidden="true"
    >
      <div className={ styles.number }>
        <p className={ styles.orderText }>Pedido</p>
        <p
          className={ styles.order }
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          {id}
        </p>
      </div>
      <div className={ styles.containerInfo }>
        <div className={ styles.contentInfo }>
          <div
            className={ `${styles.status}
        ${isPreper && styles.preper} ${isDelivered && styles.delivered}` }
          >
            <p
              data-testid={ `seller_orders__element-delivery-status-${id}` }
            >
              {status}
            </p>
          </div>
          <div className={ styles.info }>
            <p
              className={ styles.data }
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              {formatDate(date)}
            </p>
            <p
              className={ styles.price }
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              {price.replace('.', ',')}
            </p>
          </div>
        </div>
        <p
          className={ styles.address }
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          { address }
        </p>
      </div>
    </div>
  );
}

SellerCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
