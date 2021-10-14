import React from 'react';

const Point = ({ coordinates, handleDelete }) => {
  return (
    <>
      <p>
        [{coordinates[0]},{coordinates[1]}]
      </p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Point;
