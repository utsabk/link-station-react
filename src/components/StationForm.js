import React from 'react';

const StationForm = ({ addNewStation }) => {
  return (
    <form className="station-form" onSubmit={addNewStation}>
      <input type="number" name="pointX" placeholder="X coordinate" required/>
      <input type="number" name="pointY" placeholder="Y coordinate" required />
      <input type="number" name="reach" placeholder="Reach" required/>
      <button type="submit">Add</button>
    </form>
  );
};

export default StationForm;
