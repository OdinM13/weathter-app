export { filterRawData };

function filterRawData(rawData, unit) {
  const location = rawData.resolvedAddress;
  const temp = rawData.currentConditions.temp;
  const trend = rawData.description;
  const tempMin = rawData.days[0].tempmin;
  const tempMax = rawData.days[0].tempmax;
  const locationDate = formatDate(rawData.days[0].datetime);
  const conditionNow = rawData.currentConditions.conditions;
  const conditionToday = rawData.days[0].description;
  const dew = rawData.currentConditions.dew;
  const humidity = rawData.currentConditions.humidity;
  const precip = rawData.currentConditions.precip;
  const precipProb = rawData.currentConditions.precipprob;
  const precipType = rawData.currentConditions.preciptype;
  const windDir = getWindDirection(rawData.currentConditions.winddir);
  const windSpeed = rawData.currentConditions.windspeed;
  const windDesc = getWindDescription(windSpeed, unit);
  const icon = rawData.currentConditions.icon;

  let unitSymbol = '';
  if (unit === 'metric') {
    unitSymbol = '°C';
  } else {
    unitSymbol = '°F';
  }

  return {
    location: location,
    temp: temp,
    trend: trend,
    mintemp: tempMin,
    maxtemp: tempMax,
    date: locationDate,
    condNow: conditionNow,
    condToday: conditionToday,
    dewText: `The dew point is ${dew}${unitSymbol} right now.`,
    humidity: humidity,
    precip: precip,
    precipprob: precipProb,
    preciptype: precipType,
    winddir: windDir,
    windspeed: windSpeed,
    windText: `${windDesc} expected all day.`,
    icon: icon
  }
}

function getWindDescription(speed, unit) {
  if (unit === 'metric') {
    if (speed < 1) return 'Calm';
    if (speed < 6) return 'Light air';
    if (speed < 12) return 'Light breeze';
    if (speed < 20) return 'Gentle breeze';
    if (speed < 29) return 'Moderate breeze';
    if (speed < 39) return 'Fresh breeze';
    return 'Strong wind';
  } else {
    // Imperial / US (mph)
    if (speed < 1) return 'Calm';
    if (speed < 4) return 'Light air';
    if (speed < 8) return 'Light breeze';
    if (speed < 13) return 'Gentle breeze';
    if (speed < 19) return 'Moderate breeze';
    if (speed < 25) return 'Fresh breeze';
    if (speed < 32) return 'Strong breeze';
    return 'Near Gale';
  }
}

function formatDate(date) {
  const numbers = date.split("-");
  const newDate = new Date(Date.UTC(numbers[0], numbers[1] - 1, numbers[2]));
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  };
  return new Intl.DateTimeFormat("en-US", options).format(newDate);
}

function getWindDirection(degrees) {
  const sectors = [
    "North", "North-northeast", "Northeast", "East-northeast",
    "East", "East-southeast", "Southeast", "South-southeast",
    "South", "South-southwest", "Southwest", "West-southwest",
    "West", "West-northwest", "Northwest", "North-northwest"
  ];

  // normalized 
  const normalized = (degrees % 360 + 360) % 360;

  const index = Math.round(normalized / 22.5) % 16;

  return sectors[index];
}
