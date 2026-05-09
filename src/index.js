import './css/reset.css';
import { getWeatherData } from './api.js';
import './ui.js';
import { filterRawData } from './logic.js';
import { renderWeatherData } from './ui.js';


const rawWeatherData = await getWeatherData('Cologne', 'metric');
const filteredData = filterRawData(rawWeatherData, 'metric');
renderWeatherData(filteredData);

document.addEventListener('changeLocation', async (event) => {
  const newWeatherData = await getWeatherData(event.detail.location, event.detail.unit);
  const newFilteredData = filterRawData(newWeatherData, event.detail.unit);
  renderWeatherData(newFilteredData);
})

document.addEventListener('changeUnit', async (event) => {
  const newWeatherData = await getWeatherData(event.detail.location, event.detail.unit);
  const newFilteredData = filterRawData(newWeatherData, event.detail.unit);
  renderWeatherData(newFilteredData);
})

console.table(filteredData);
console.table(rawWeatherData);
