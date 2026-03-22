export { filterRawData };

function filterRawData(rawData) {
  const location = rawData.resolvedAddress;
  const temp = rawData.currentConditions.temp;
  const trend = rawData.description;
  const tempMin = rawData.days[0].tempmin;
  const tempMax = rawData.days[0].tempmax;
  const locationDate = rawData.days[0].datetime;
  const condition = rawData.currentConditions.conditions;
  const dew = rawData.currentConditions.dew;
  const humidity = rawData.currentConditions.humidity;
  const precip = rawData.currentConditions.precip;
  const precipProb = rawData.currentConditions.precipprob;
  const precipType = rawData.currentConditions.preciptype;
  const windDir = rawData.currentConditions.winddir;
  const windSpeed = rawData.currentConditions.windspeed;
  const icon = rawData.currentConditions.icon;

  return {
    location: location,
    temp: temp,
    trend: trend,
    mintemp: tempMin,
    maxtemp: tempMax,
    date: locationDate,
    cond: condition,
    dew: dew,
    humidity: humidity,
    precip: precip,
    precipprob: precipProb,
    preciptype: precipType,
    winddir: windDir,
    windspeed: windSpeed,
    icon: icon
  }
}
