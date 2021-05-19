// Increase or Decrease for less or more AQI Record
const MAX_AQI_RECORD = 10;

// Updates the city AQI Array limit given by MAX_AQI_RECORD
const updateCityAQIArray = (cityAQIArray, newCityAqi) => {
  if (cityAQIArray.length >= MAX_AQI_RECORD) cityAQIArray.pop();
  cityAQIArray.unshift(newCityAqi.toFixed(2));
  return cityAQIArray;
};

// Converting array data in object so don't have to iterate over city array to update new data
const formatData = (prevData, newData) => {
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

export default formatData;
