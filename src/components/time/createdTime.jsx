import { getTime } from './date.js';

export const CreatedTime = ({ createdAt }) => {
  return (
      <p className='order-info'>{getTime(createdAt)}</p>
  );
};
