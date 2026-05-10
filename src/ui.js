import './css/styles.css';
export { renderWeatherData };

function renderWeatherData(filteredData) {
  const valueHumidity = document.querySelector(".value.humidity");
  const valueRain = document.querySelector(".value.rain");
  const valueWind = document.querySelector(".value.wind");
  const valueTemp = document.querySelector(".value.temp");

  const textHumidity = document.querySelector(".bottom-row-text.humidity");
  const textRain = document.querySelector(".bottom-row-text.rain");
  const textWindDir = document.querySelector(".wind-direction-text");
  const textWind = document.querySelector(".bottom-row-text.wind");
  const textTemp = document.querySelector(".middle-row-sub-text");

  const textLocation = document.querySelector(".location-name");
  const date = document.querySelector(".date");

  const tagCondition = document.querySelector(".condition-tag");
  const valueTempHigh = document.querySelector(".high-value");
  const valueTempLow = document.querySelector(".low-value");

  resetIcons();
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
  renderContent(textWindDir, filteredData.winddir);
  renderContent(textWind, filteredData.windText);
  renderContent(textTemp, filteredData.condToday);

  renderContent(textLocation, filteredData.location);
  renderContent(date, filteredData.date);

  renderContent(tagCondition, filteredData.condNow);
  renderContent(valueTempHigh, filteredData.maxtemp);
  renderContent(valueTempLow, filteredData.mintemp);

}

function renderContent(selector, value) {
  selector.innerHTML = '';
  const content = document.createTextNode(value);
  selector.appendChild(content);
}

function resetIcons() {
  const allIcons = document.querySelectorAll('.weather-icon');
  for (const icon of allIcons) {
    icon.style.display = 'none';
  }
}

const unitToggle = document.querySelector('.unit-toggle');
const searchBar = document.querySelector("#search");
searchBar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const changeLocation = new CustomEvent('changeLocation', {
      detail: {
        location: searchBar.value,
        unit: unitToggle.querySelector('input:checked').value 
      }
    }) 
    searchBar.value = '';
    document.dispatchEvent(changeLocation);
  }
})

unitToggle.addEventListener('click', (e) => {
  const textLocation = document.querySelector(".location-name");
  const changeUnit = new CustomEvent('changeUnit', {
    detail: {
      location: textLocation.textContent, 
      unit: unitToggle.querySelector('input:checked').value
    }
  })
  document.dispatchEvent(changeUnit);
})

