import React from 'react';

const PointForm = ({ addNewPoints }) => {

  return (
    <form onSubmit={addNewPoints}>
      <input type="number" name="pointX" placeholder="X coordinate" />
      <input type="number" name="pointY" placeholder="Y coordinate" />
      <button type="submit">Add</button>
    </form>
  );
};

export default PointForm;
