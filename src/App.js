import React, { useState } from 'react';
import Header from './components/Header';
import PointForm from './components/PointForm';
import StatioForm from './components/StationForm';

const App = () => {
  const [points, setPoints] = useState([]);

  const [stations, setStation] = useState([]);

  const addNewPoints = (event) => {
    event.preventDefault();
    const pointX = event.target.elements.pointX.value;
    const pointY = event.target.elements.pointY.value;

    setPoints(points.concat([[pointX, pointY]]));

    console.log('Button clicked:', points);
  };

  const addNewStation = (event) => {
    event.preventDefault();
    const pointX = event.target.elements.pointX.value;
    const pointY = event.target.elements.pointY.value;
    const reach = event.target.elements.reach.value;

    setStation(stations.concat([[pointX, pointY, reach]]));

    console.log('Button clicked:', stations);
  };

  return (
    <>
      <Header />
      <PointForm addNewPoints={addNewPoints} />
      <StatioForm addNewStation={addNewStation} />
    </>
  );
};

export default App;
