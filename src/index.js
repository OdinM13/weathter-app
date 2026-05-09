import './css/reset.css';
import { getWeatherData } from './api.js';
import './ui.js';
import { filterRawData } from './logic.js';
import { renderWeatherData } from './ui.js';


const rawWeatherData = await getWeatherData('Cologne', 'metric');
const filteredData = filterRawData(rawWeatherData, 'metric');
renderWeatherData(filteredData);

document.addEventListener('changeLocation', async (event) => {
  console.log("Suche nach:", event.detail.location);
  const newWeatherData = await getWeatherData(event.detail.location, 'metric');
  const newFilteredData = filterRawData(newWeatherData, 'metric');
  renderWeatherData(newFilteredData);
})

console.table(filteredData);
console.table(rawWeatherData);
