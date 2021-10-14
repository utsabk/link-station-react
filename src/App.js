import React, { useState } from 'react';
import Header from './components/Header';
import PointForm from './components/PointForm';
import Point from './components/Point';
import StatioForm from './components/StationForm';
import Station from './components/Station';
import Calculate from './components/Calculate';
import Response from './components/Response';
import './App.css'

const App = () => {
  const [points, setPoints] = useState([]);

  const [stations, setStations] = useState([]);

  const [responses, setResponses] = useState([]);

  const addNewPoints = (event) => {
    event.preventDefault();
    const pointX = event.target.elements.pointX.value;
    const pointY = event.target.elements.pointY.value;

    setPoints(points.concat([[pointX, pointY]]));

    event.target.elements.pointX.value = '';
    event.target.elements.pointY.value = '';
  };

  const addNewStation = (event) => {
    event.preventDefault();
    const pointX = event.target.elements.pointX.value;
    const pointY = event.target.elements.pointY.value;
    const reach = event.target.elements.reach.value;

    setStations(stations.concat([[pointX, pointY, reach]]));
    event.target.elements.pointX.value = '';
    event.target.elements.pointY.value = '';
    event.target.elements.reach.value = '';
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

  const handleCalculation = () => {

    setResponses([]);

    const distanceCalculator = (pointA, pointB) => {
      const base = pointA[0] - pointB[0];
      const height = pointA[1] - pointB[1];

      return Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
    };

    const powerCalculator = (devicePoints, linkStation) => {
      const [xCoord, yCoord, reach] = linkStation;
      const linkStationPoints = [xCoord, yCoord];
      const distance = distanceCalculator(devicePoints, linkStationPoints);

      if (distance > reach) return 0;
      else {
        return Math.pow(Math.abs(reach - distance), 2);
      }
    };

    console.log('Points', points);
    points.forEach((points) => {
      let previousPower = 0;
      let bestStation = [0, 0];

      stations.forEach((linkStation) => {
        const power = powerCalculator(points, linkStation);
        if (power > previousPower) {
          previousPower = power;
          bestStation = linkStation;
        }
      });

      if (previousPower === 0) {
        setResponses(
          responses.concat(
            `No link station within reach for point ${points[0]}, ${points[1]}`
          )
        );
      } else {
        setResponses(
          responses.concat(
            `Best link station for point ${points[0]},${points[1]} is ${bestStation[0]},${bestStation[1]} with power ${previousPower}`
          )
        );
      }
    });
  };

  return (
    <div className="container">
      {console.log('Response:-', responses)}

      <Header />
      <div className="point-box">
        {points.length === 0 && <p>Add new point</p>}
        {points.map((point, i) => (
          <Point
            key={i}
            coordinates={point}
            handleDelete={() => handlePointDelete(point)}
          />
        ))}
        <PointForm addNewPoints={addNewPoints} />
      </div>

      <div className="station-box">
        {stations.length === 0 && <p>Add new Station</p>}
        {stations.map((station, i) => (
          <Station
            key={i}
            station={station}
            handleDelete={() => handleStationDelete(station)}
          />
        ))}
        <StatioForm addNewStation={addNewStation} />
      </div>
      <Calculate
        handleCalculation={handleCalculation}
        isActive={points.length > 0 && stations.length > 0}
      />

      <div className="response-box">
        {responses &&
          responses.map((message, i) => <Response key={i} message={message} />)}
      </div>
    </div>
  );
};

export default App;
