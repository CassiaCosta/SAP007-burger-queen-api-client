import { getInterval } from './date.jsx';

export const PreparationTime = ({ createdAt, updatedAt }) => {
  return (
    <>
      {updatedAt ? (
        <p className='order-info'>Preparado em: {getInterval(createdAt, updatedAt)}</p>
      ) : null}
    </>
  );
};
