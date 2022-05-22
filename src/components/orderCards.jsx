import React from 'react';
import OrderProducts from './orderProduct';
import styles from './components.module.css';
import { TimeOrInterval } from './time/time';
import { PreparationTime } from './time/preparationTime';
import { initialStatus } from "./time/date";


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

// const initialStatus = (status) => {
//   if (status === 'pending') {
//     return 'Pendente';
//   } else if (status === 'preparando') {
//     return 'Preparando';
//   } else {
//     return 'Finalizado';
//   }
// };

const OrderCard = ({
  id,
  name,
  table,
  status,
  onClick,
  createdAt,
  updatedAt,
  products,
  error,
}) => (
  <section className={styles.orderCardOrganization}>
    <div>
      <section className={styles.orderHeader}>
        <div className={styles.orderCustomer}>
          <p>Mesa: {table}</p>
          <p>{name}</p>
        </div>
        <div className={styles.orderInformation}>
          <p>Pedido N°{id}</p>
          <TimeOrInterval
            createdAt={createdAt}
          />
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
    <section>
      <PreparationTime
       createdAt={createdAt}
       updatedAt={updatedAt}
        />
      <p className={styles.errorMessage}>{error}</p>
      <div className={styles.orderFooter}>
        <p className={styles.orderStatus}>{initialStatus(status)}</p>
        <button className={`kitchenChefButton ${colorClass(status)}`} onClick={onClick}> {nameButton(status)} </button>
      </div>
    </section>
  </section>
);

export default OrderCard;
