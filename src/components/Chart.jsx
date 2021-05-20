import React from 'react';
import { Line } from 'react-chartjs-2';

import Text from './common/Text';
import cityColor from '../utils/cityColor';
import { chartXAxesLabels, MAX_AQI_RECORD } from '../utils/formatData';

const options = {
  animation: false,
};

const MultiAxisLine = ({ selectedForChart, airQualityData }) => {
  const data = {
    labels: chartXAxesLabels(),
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
      <Text className="d-flex justify-content-center mb-3" size="40" mSize="30" weight="300">
        Air Quality Comparison Chart
      </Text>
      <Line data={data} options={options} />
      <Text className="d-flex justify-content-center" size="14" weight="400">
        Past {MAX_AQI_RECORD} Air quality reading
      </Text>
    </>
  );
};

export default MultiAxisLine;
