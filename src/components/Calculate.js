import React from 'react';

const Calculate = ({ handleCalculation, isActive }) => {
  console.log('Calculate', isActive);
  return (
    <button onClick={handleCalculation} disabled={!isActive}>
      Calculate
    </button>
  );
};

export default Calculate;
