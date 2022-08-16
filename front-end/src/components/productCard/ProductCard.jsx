import React, { useContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './styles.module.scss';
import Context from '../../context/Context';

export default function ProductCard({ testId, title, price, image, id }) {
  const { cart, setCart } = useContext(Context);
  const [quantity, setQuantity] = useState(0);

  const correctPrice = (quantity * parseFloat(price)).toFixed(2);

  const cartOperations = () => {
    const itemIsOnCart = cart.some((item) => item.name === title);

    // Updating quantity when Item already on Cart.
    if (quantity > 0 && itemIsOnCart) {
      const cartUpdated = cart.map((item) => {
        if (item.name === title && (item.quantity > 0)) return { ...item, quantity };
        return item;
      });
      return setCart(cartUpdated);
    }

    // Inserting on Cart for the first time.
    if (quantity > 0) {
      return setCart((prevValue) => [...prevValue, { name: title, price, quantity, id }]);
    }

    // Removing item from Cart when quantity is 0.
    if (quantity === 0 && itemIsOnCart) {
      const removingItem = cart.filter((item) => item.name !== title);
      return setCart(removingItem);
    }
  };

  useEffect(() => {
    cartOperations();
  }, [quantity]);

  return (
    <div className={ styles.container }>
      <div className={ styles.price }>
        <p data-testid={ `customer_products__element-card-price-${testId}` }>
          { `R$ ${price.replace('.', ',')}`}
        </p>
      </div>
      <div className={ styles.containerImg }>
        <img
          src={ image }
          alt={ title }
          data-testid={ `customer_products__img-card-bg-image-${testId}` }
        />
      </div>

      <p data-testid={ `customer_products__element-card-title-${testId}` }>{title}</p>

      <div className={ styles.button }>
        <button
          className={ styles.btnLess }
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
          type="text"
          value={ quantity }
          onChange={ (event) => setQuantity(Number(event.target.value)) }
        />
        <button
          className={ styles.btnMore }
          data-testid={ `customer_products__button-card-add-item-${testId}` }
          type="button"
          onClick={ () => setQuantity(quantity + 1) }
        >
          +
        </button>
      </div>

      <div className={ styles.total }>
        <p>{ `Valor total do produto R$${correctPrice}` }</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  testId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
