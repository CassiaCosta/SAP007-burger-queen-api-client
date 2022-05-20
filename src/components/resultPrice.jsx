import React from 'react';

const ResultPrice = (total) => {
  return (
    <div>
      <p>R$ {total.value},00</p>
    </div>
  );
};

export default ResultPrice;
