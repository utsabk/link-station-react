import React from 'react';

const PointForm = (props) => {
  const { addNewPoints } = props;

  return (
    <form onSubmit={addNewPoints}>
      <input type="number" name="pointX" placeholder="X coordinate" />
      <input type="number" name="pointY" placeholder="Y coordinate" />
      <button type="submit">Add</button>
    </form>
  );
};

export default PointForm;
