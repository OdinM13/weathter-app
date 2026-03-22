import './css/reset.css';
import { getWeatherData } from './api.js';
import './ui.js';
import { filterRawData } from './logic.js';


const rawWeatherData = await getWeatherData('cologne', 'metric');
const filteredData = filterRawData(rawWeatherData);

console.table(filteredData);
