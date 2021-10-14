import React from 'react';

const Station = ({ station, handleDelete }) => {
  return (
    <>
      <p>
        [{station[0]},{station[1]},{station[2]}]
      </p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Station;
