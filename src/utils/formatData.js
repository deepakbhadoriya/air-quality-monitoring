// Increase or Decrease for less or more AQI Record
export const MAX_AQI_RECORD = 15;

//  Generate chart x-axis labels
export const chartXAxesLabels = () => {
  const result = [];
  let n = 0;
  while (n < MAX_AQI_RECORD) {
    n++;
    result.push(n);
  }
  return result;
};

// Updates the city AQI Array limit given by MAX_AQI_RECORD
const updateCityAQIArray = (cityAQIArray, newCityAqi) => {
  if (cityAQIArray.length >= MAX_AQI_RECORD) cityAQIArray.pop();
  cityAQIArray.unshift(newCityAqi.toFixed(2));
  return cityAQIArray;
};

// Converting array data in object so don't have to iterate over city array to update new data
export const formatData = (prevData, newData) => {
  let tempData = {};
  const date = new Date();
  newData.forEach((city) => {
    const prevAQIRecord = prevData[city.city] ? prevData[city.city].aqiArray : [];
    tempData[city.city] = {
      aqiArray: updateCityAQIArray(prevAQIRecord, city.aqi),
      date,
    };
  });

  return { ...prevData, ...tempData };
};
