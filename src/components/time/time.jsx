import { getTime, getInterval } from "./date.jsx";

export const TimeOrInterval = ({ createdAt, updatedAt, status }) => {
  return (
    <>
      <p>{getTime(createdAt)}</p>
      {updatedAt ? (
        <p className="order-info">Preparo: {getInterval(createdAt, updatedAt)}</p>
      ) : null}
    </>
  );
};
