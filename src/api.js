export { getWeatherData };

async function getWeatherData(location, unit) {
  try {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
    const params = new URLSearchParams();
    params.append('unitGroup', unit);
    params.append('key', 'GYDDTGCC3FSYAQBYY6UKFKHJX'); 
    params.append('contentType', 'json');

    const response = await fetch(`${url}${location}?${params}`);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const weatherData = await response.json();
    console.table(weatherData);
    return weatherData;
  } catch (error) {
    // If I want to do something with the catched error, I have to return it
    console.error(error);
  }
}

// Delete later
window.getWeatherData = getWeatherData;

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cologne?unitGroup=us&key=GYDDTGCC3FSYAQBYY6UKFKHJX&contentType=json
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cologne?unitGroup=metric&key=GYDDTGCC3FSYAQBYY6UKFKHJX&contentType=json
