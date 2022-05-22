import React from 'react';
import OrderProducts from './orderProduct';
import { TimeOrInterval} from './time/time';
import { initialStatus } from './time/date';
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
  products,
  updatedAt,
  createdAt,
  error,
}) => (
  <section className={styles.orderCardOrganization}>
    <div>
      <section className={styles.orderHeader}>
        <div className={styles.orderCustomer}>
          <p>Nome: {name}</p>
          <p>Mesa: {table}</p>
        </div>
        <div className={styles.orderInformation}>
          <p>Pedido N°{id}</p>
          <TimeOrInterval
            createdAt={createdAt}
            updatedAt={updatedAt}
            status={status}
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
      <p className={styles.errorMessage}>{error}</p>
      <div className={styles.orderFooter}>
        <p className={styles.orderStatus}>{initialStatus(status)}</p>
        <button className={`kitchenChefButton ${colorClass(status)}`} onClick={onClick}> {nameButton(status)} </button>
      </div>
    </section>
  </section>
);

export default OrderCard;
