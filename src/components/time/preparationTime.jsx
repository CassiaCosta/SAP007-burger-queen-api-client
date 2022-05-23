import { getInterval } from './date.js';

export const PreparationTime = ({ createdAt, updatedAt }) => {
  return (
    <>
      {updatedAt ? (
        <p className='order-info'>Preparado em: {getInterval(createdAt, updatedAt)}</p>
      ) : null}
    </>
  );
};
