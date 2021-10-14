import React from 'react';

const PointForm = ({ addNewPoints }) => {

  return (
    <form onSubmit={addNewPoints}>
      <input type="number" name="pointX" placeholder="X coordinate" required/>
      <input type="number" name="pointY" placeholder="Y coordinate" required/>
      <button type="submit">Add</button>
    </form>
  );
};

export default PointForm;
