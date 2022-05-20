import React from 'react';
import OrderProducts from './orderProduct';

const nameButton = (status) => {
  if (status === 'pending') {
    return 'Iniciar preparo';
  } else if (status === 'preparando') {
    return 'Finalizar preparo';
  } else {
    return 'Servir pedido';
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
  <section className='order-card'>
    <p className='order-header'>Pedido N°{id}</p>
    <div className='cards-info'>
      <p className='order-info'>Nome: {name}</p>
      <p className='order-info'>Mesa: {table}</p>
      <p className='order-info'>Status: {initialStatus(status)}</p>
      Itens:
    </div>
    <div className='order-products'>
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
    </div>
    <button className='order-button' onClick={onClick}>
      {nameButton(status)}
    </button>
  </section>
);

export default OrderCard;
