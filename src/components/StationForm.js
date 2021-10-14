import React from 'react';

const StationForm = ({ addNewStation }) => {
  return (
    <form onSubmit={addNewStation}>
      <input type="number" name="pointX" placeholder="X coordinate" />
      <input type="number" name="pointY" placeholder="Y coordinate" />
      <input type="number" name="reach" placeholder="Reach" />
      <button type="submit">Add</button>
    </form>
  );
};

export default StationForm;
