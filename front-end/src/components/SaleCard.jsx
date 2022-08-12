import { PropTypes } from 'prop-types';

export default function SaleCard(props) {
  const { id, date, status, price } = props;
  return (
    <div>
      <p data-testid={ `customer_products__element-order-date-${id}` }>
        {`Pedido: ${id}`}
      </p>
      <p
        data-testid={ `customer_products__element-order-date-${id}` }
      >
        {`Data: ${date}`}

      </p>
      <p
        data-testid={ `customer_products__element-order-date-${id}` }
      >
        {`Status: ${status}`}

      </p>
      <p
        data-testid={ `customer_products__element-order-date-${id}` }
      >
        {`Price: ${price}`}

      </p>
    </div>
  );
}

SaleCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
