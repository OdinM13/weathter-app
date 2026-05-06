import './css/reset.css';
import { getWeatherData } from './api.js';
import './ui.js';
import { filterRawData } from './logic.js';
import { renderWeatherData } from './ui.js';


const rawWeatherData = await getWeatherData('cologne', 'metric');
const filteredData = filterRawData(rawWeatherData, 'metric');
renderWeatherData(filteredData);

console.table(filteredData);
