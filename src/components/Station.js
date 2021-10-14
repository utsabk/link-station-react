import React from 'react';

const Station = ({ station, handleDelete }) => {
  return (
    <>
      <p className="coordinate">
        &bull; [{station[0]},{station[1]},{station[2]}]
        <button onClick={handleDelete}>Delete</button>
      </p>
    </>
  );
};

export default Station;
