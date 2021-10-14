import React from 'react';

const Calculate = ({ handleCalculation, isActive }) => {
  return (
    <button onClick={handleCalculation} disabled={!isActive}>
      Calculate
    </button>
  );
};

export default Calculate;
