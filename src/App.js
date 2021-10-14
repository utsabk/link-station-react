import React, { useState } from 'react';
import Header from './components/Header';
import PointForm from './components/PointForm';
import Point from './components/Point';
import StatioForm from './components/StationForm';
import Station from './components/Station';

const App = () => {
  const [points, setPoints] = useState([]);

  const [stations, setStations] = useState([]);

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

    setStations(stations.concat([[pointX, pointY, reach]]));

    console.log('Button clicked:', stations);
  };

  const handlePointDelete = (pointToDelete) => {
    const updatedPoints = points.filter((point) => pointToDelete !== point);
    setPoints(updatedPoints);
  };

  const handleStationDelete = (stationToDelete) => {
    const updatedStations = stations.filter(
      (point) => stationToDelete !== point
    );
    setStations(updatedStations);
  };

  return (
    <>
      <Header />
      <div>
        {points.length === 0 && <p>Add new point</p>}
        {points.map((point) => (
          <Point
            key={point}
            coordinates={point}
            handleDelete={() => handlePointDelete(point)}
          />
        ))}
        <PointForm addNewPoints={addNewPoints} />
      </div>

      <div>
        {stations.length === 0 && <p>Add new Station</p>}
        {stations.map((station) => (
          <Station
            key={station}
            station={station}
            handleDelete={() => handleStationDelete(station)}
          />
        ))}
        <StatioForm addNewStation={addNewStation} />
      </div>
    </>
  );
};

export default App;
