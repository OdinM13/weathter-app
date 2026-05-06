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
  
  renderMainValue(valueHumidity, filteredData.humidity);
  renderMainValue(valueRain, filteredData.precipprob);
  renderMainValue(valueWind, filteredData.windspeed);
  renderMainValue(valueTemp, filteredData.temp);

  renderBottomText(textHumidity, filteredData.dewText);
  renderBottomText(textRain, filteredData.trend);
  renderBottomText(textWind, filteredData.windText);
}

function renderMainValue(selector, value) {
  const content = document.createTextNode(value);
  selector.appendChild(content);
}

function renderBottomText(selector, value) {
  const content = document.createTextNode(value);
  selector.appendChild(content);
}
