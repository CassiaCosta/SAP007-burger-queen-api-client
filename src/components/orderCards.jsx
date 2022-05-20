import React from 'react';
import OrderProducts from './orderProduct';
import styles from './components.module.css';

const nameButton = (status) => {
  if (status === 'pending') {
    return 'Preparar';
  } else if (status === 'preparando') {
    return 'Finalizar';
  } else {
    return 'Servir';
  }
};

const colorClass = (status) => {
  if (status === 'pending') {
    return '';
  } else if (status === 'preparando') {
    return 'prepared';
  } else {
    return 'finish';
  }
};

const initialStatus = (status) => {
  if (status === 'pending') {
    return 'Pendente';
  } else if (status === 'preparando') {
    return 'Preparando';
  } else {
    return 'Finalizado';
  }
};

const OrderCard = ({
  id,
  name,
  table,
  status,
  onClick,
  products,
}) => (
  <section className={styles.orderCardOrganization}>
    <div>
      <section className={styles.orderHeader}>
        <div className={styles.orderCustomer}>
          <p className='order-info'>Nome: {name}</p>
          <p className='order-info'>Mesa: {table}</p>
        </div>
        <div className={styles.orderInformation}>
          <p className='order-header'>Pedido N°{id}</p>
          <p>Data e hora</p>
        </div>
      </section>
      <section className={styles.orderItemList}>
        {products.map((elem) => {
          return (
            <OrderProducts
              key={elem.id}
              qtd={elem.qtd}
              name={elem.name}
              flavor={elem.flavor}
              complement={elem.complement}
            />
          );
        })}
      </section>
    </div>
    <section className={styles.orderFooter}>
      <p className={styles.orderStatus}>{initialStatus(status)}</p>
      <button className={`kitchenChefButton ${colorClass(status)}`} onClick={onClick}> {nameButton(status)} </button>
    </section>
  </section>
);

export default OrderCard;
