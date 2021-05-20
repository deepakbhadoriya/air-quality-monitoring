import React from 'react';
import TimeAgo from 'react-timeago';
import GaugeChart from 'react-gauge-chart';
import styled from 'styled-components';

import Text from './common/Text';
import airQualityNColor from '../utils/airQualityNColor';
import getAirQualityCategory from '../utils/getAirQualityCategory';

const CityAirQualityCard = ({ airQualityData, city, handleAddToChart, selectedForChart }) => (
  <CardContainer>
    <div className="row">
      <div className="col-12">
        <Text className="d-block" size="15" weight="300">
          CITY
        </Text>
        <Text size="25" weight="600">
          {city}
        </Text>
      </div>
      <div className="col-12">
        <Text size="15" weight="300">
          Updated : &nbsp;
        </Text>
        <Text size="15" weight="600">
          <TimeAgo date={airQualityData[city].date} />
        </Text>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-12" align="center">
        <Text size="15" weight="300">
          AIR Quality
        </Text>
      </div>
      <div className="col-12">
        <GaugeChart
          textColor="#000"
          id="gauge-chart1"
          nrOfLevels={6}
          arcsLength={[0.1, 0.1, 0.2, 0.2, 0.2, 0.2]}
          colors={airQualityNColor.map((item) => item.color)}
          percent={airQualityData[city].aqiArray[0] / 500}
          arcPadding={0.02}
          formatTextValue={() => getAirQualityCategory(airQualityData[city].aqiArray[0]).airQuality}
        />
      </div>
      <div
        className="col-12"
        align="center"
        style={{
          backgroundColor: getAirQualityCategory(airQualityData[city].aqiArray[0]).color,
          borderRadius: 100,
        }}
      >
        <Text size="40" mSize="30" weight="600">
          {airQualityData[city].aqiArray[0]}
        </Text>
      </div>
      <div className="col-12 mt-4 mb-3" align="center">
        <Button
          className={
            selectedForChart.includes(city) ? 'btn btn-outline-secondary' : 'btn btn-secondary'
          }
          onClick={() => handleAddToChart(city)}
        >
          <Text size="16" weight="450" color="inherit">
            {selectedForChart.includes(city) ? 'REMOVE FROM CHART' : 'ADD TO CHART'}
          </Text>
        </Button>
      </div>
    </div>
  </CardContainer>
);

const CardContainer = styled.div`
  border-radius: 10px;
  background-color: #f3f3f3;
  padding: 20px;
  transition: linear 300ms;
  :hover {
    background-color: #fcfcfc;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 3px 5px 6px #ccc;
  }
`;

const Button = styled.div`
  margin: auto;
  padding: 8px 20px;
  border-radius: 50px;
`;

export default CityAirQualityCard;
