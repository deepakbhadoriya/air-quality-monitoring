import airQualityNColor from './airQualityNColor';

const getAirQualityCategory = (value) => {
  if (0 <= value && value < 51) return airQualityNColor[0];
  else if (51 <= value && value < 101) return airQualityNColor[1];
  else if (101 <= value && value < 201) return airQualityNColor[2];
  else if (201 <= value && value < 301) return airQualityNColor[3];
  else if (301 <= value && value < 401) return airQualityNColor[4];
  else if (401 <= value && value <= 500) return airQualityNColor[5];
  else return 'value';
};

export default getAirQualityCategory;
