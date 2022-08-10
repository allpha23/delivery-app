import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export default function ProductCard({ testId, title, price, image }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <h1 data-testid={ `customer_products__element-card-title-${testId}` }>{title}</h1>
      <h1 data-testid={ `customer_products__element-card-price-${testId}` }>{price.replace('.', ',')}</h1>
      <img
        src={ image }
        alt={ title }
        data-testid={ `customer_products__img-card-bg-image-${testId}` }
      />

      <button
        data-testid={ `customer_products__button-card-rm-item-${testId}` }
        type="button"
        onClick={ () => {
          if (quantity > 0) setQuantity(quantity - 1);
        } }
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${testId}` }
        type="number"
        value={ quantity }
        onChange={ (event) => setQuantity(Number(event.target.value)) }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${testId}` }
        type="button"
        onClick={ () => setQuantity(quantity + 1) }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  testId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
