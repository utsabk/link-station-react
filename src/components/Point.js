import React from 'react';

const Point = ({ coordinates, handleDelete }) => {
 
  return (
    <>
      <p className="coordinate">
        &bull; [{coordinates[0]},{coordinates[1]}]
        <button onClick={handleDelete}>Delete</button>
      </p>
    </>
  );
};

export default Point;
