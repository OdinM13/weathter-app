import './css/styles.css';
export { renderWeatherData };

function renderWeatherData(filteredData) {
  const valueHumidity = document.querySelector(".value.humidity");
  const valueRain = document.querySelector(".value.rain");
  const valueWind = document.querySelector(".value.wind");
  const valueTemp = document.querySelector(".value.temp");

  const textHumidity = document.querySelector(".bottom-row-text.humidity");
  const textRain = document.querySelector(".bottom-row-text.rain");
  const textWind = document.querySelector(".bottom-row-text.wind");
  const textTemp = document.querySelector(".middle-row-sub-text");

  const textLocation = document.querySelector(".location-name");
  const date = document.querySelector(".date");

  const activeIcon = document.getElementById(filteredData.icon);
  if (activeIcon) {
    activeIcon.style.display = 'block';
  }
  
  renderContent(valueHumidity, filteredData.humidity);
  renderContent(valueRain, filteredData.precipprob);
  renderContent(valueWind, filteredData.windspeed);
  renderContent(valueTemp, filteredData.temp);

  renderContent(textHumidity, filteredData.dewText);
  renderContent(textRain, filteredData.trend);
  renderContent(textWind, filteredData.windText);
  renderContent(textTemp, filteredData.cond);

  renderContent(textLocation, filteredData.location);
  renderContent(date, filteredData.date);
}

function renderContent(selector, value) {
  const content = document.createTextNode(value);
  selector.appendChild(content);
}
