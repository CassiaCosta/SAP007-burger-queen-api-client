import React from 'react';
import cancel from '../img/cancel.png';
import styles from './components.module.css';

const Cart = ({ name, flavor, complement, price, qtd, type }) => {
  return (
    <li className={styles.order}>
      <div className={styles.orderContainer}>
        <p>{qtd}</p>
        <div className={styles.orderInformation}>
          <h4>{name}</h4>
          {type === 'hamburguer' ? (
            <section>
              <p value='sabor'>- {flavor}</p>
              <p name='complemento'>- {`${complement !== null ? complement : ''}`}</p>
            </section>
          ) : ''}
        </div>
      </div>
      <div className={styles.priceContainerAndDelete}>
        <p>R${price},00</p>
        <button className={styles.deleteItem}>
          <img src={cancel} alt='Botão de excluir item' />
        </button>
      </div>
    </li>
  );
};

export default Cart;
