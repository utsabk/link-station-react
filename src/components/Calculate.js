import React from 'react';

const Calculate = ({ handleCalculation, isActive }) => {
  return (
    <button className="calculateBtn" onClick={handleCalculation} disabled={!isActive}>
      Calculate
    </button>
  );
};

export default Calculate;
