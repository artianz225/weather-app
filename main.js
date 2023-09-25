import fetchData from './src/helpers/fetchData';
import displayData from './src/helpers/displayData';
import './style.css';

const form = document.querySelector("form")

async function main (e) {
  e.preventDefault();  
  const location = document.getElementById("search").value.toUpperCase();
  console.log(location);
    const apiKey        = "a1c7a56c82595ad80e4fb92d87eb4268";
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    const weatherData   = await fetchData(weatherApiUrl);
    const weatherIcon   = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    displayData({weatherData, weatherIcon});
}
form.addEventListener("submit", main)