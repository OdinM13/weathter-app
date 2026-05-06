import './css/styles.css';
export { renderWeatherData };

function renderWeatherData(filteredData) {
  const valueHumidity = document.querySelector(".value.humidity");
  const valueRain = document.querySelector(".value.rain");
  const valueWind = document.querySelector(".value.wind");
  
  renderMainValue(valueHumidity, filteredData.humidity);
  renderMainValue(valueRain, filteredData.precipprob);
  renderMainValue(valueWind, filteredData.windspeed);
}

function renderMainValue(selector, value) {
  const content = document.createTextNode(value);
  selector.appendChild(content);
}

