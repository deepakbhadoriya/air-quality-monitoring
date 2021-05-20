import React, { useState, useEffect } from 'react';

import CityAirQualityCard from './components/CityAirQualityCard';
import Loading from './components/Loading';
import Header from './components/Header';
import Chart from './components/Chart';
import { formatData } from './utils/formatData';
import { socket } from './data/socketConnection';
import './App.css';

function App() {
  const [airQualityData, setAirQualityData] = useState({});
  const [selectedForChart, setSelectedForChart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    socket.onmessage = (event) => {
      handleDataUpdate(JSON.parse(event.data));
    };
    socket.onerror = () => {
      console.log('Connection Error');
      setIsLoading(true);
    };
    return () => {
      socket.close();
    };
  }, []);

  const handleDataUpdate = (data) => {
    setAirQualityData((prevState) => formatData(prevState, data));
    setIsLoading(false);
  };

  const handleAddToChart = (city) => {
    const indexOfCity = selectedForChart.indexOf(city);
    if (indexOfCity === -1) setSelectedForChart((prevState) => [...prevState, city]);
    else setSelectedForChart(selectedForChart.filter((item) => item !== city));
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 my-5">
            {!isLoading && selectedForChart.length !== 0 && (
              <Chart selectedForChart={selectedForChart} airQualityData={airQualityData} />
            )}
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            Object.keys(airQualityData).map((city) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={city}>
                <CityAirQualityCard
                  city={city}
                  airQualityData={airQualityData}
                  selectedForChart={selectedForChart}
                  handleAddToChart={handleAddToChart}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
