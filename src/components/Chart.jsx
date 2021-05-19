import React from 'react';
import { Line } from 'react-chartjs-2';

import cityColor from '../utils/cityColor';
import Text from './common/Text';

const options = {
  animation: false,
};

const MultiAxisLine = ({ selectedForChart, airQualityData }) => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: selectedForChart.map((city) => ({
      label: city,
      data: airQualityData[city].aqiArray,
      fill: false,
      backgroundColor: cityColor[city],
      borderColor: cityColor[city],
      yAxisID: 'y-axis-1',
    })),
  };

  return (
    <>
      <Text className="d-flex justify-content-center mb-3" size="40px" weight="300">
        Air Quality Comparison Chart
      </Text>
      <Line data={data} options={options} />
      <Text className="d-flex justify-content-center" size="14px" weight="400">
        Past 10 Air quality reading
      </Text>
    </>
  );
};

export default MultiAxisLine;
