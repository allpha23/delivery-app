import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export default function ProductCard({ testId, title, price, image }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div data-testId={ testId }>
      <h1>{title}</h1>
      <h1>{price}</h1>
      <img src={ image } alt={ title } />

      <button
        type="button"
        onClick={ () => {
          if (quantity > 0) setQuantity(quantity - 1);
        } }
      >
        -
      </button>
      <input type="number" value={ quantity } />
      <button type="button" onClick={ () => setQuantity(quantity + 1) }> + </button>
    </div>
  );
}

ProductCard.propTypes = {
  testId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
