import { getTime } from './date.jsx';

export const TimeOrInterval = ({ createdAt }) => {
  return (
      <p className='order-info'>{getTime(createdAt)}</p>
  );
};
