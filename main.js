import fetchData from './src/helpers/fetchData';
import displayData from './src/helpers/displayData';
import './style.css';

const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = "a1c7a56c82595ad80e4fb92d87eb4268";
    const location = document.querySelector('.search-box input').value;

    if (location === '')
        return alert("Please location");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'https://openweathermap.org/img/wn/01d.png';
                    break;

                case 'Rain':
                    image.src = 'https://openweathermap.org/img/wn/10d.png';
                    break;

                case 'Snow':
                    image.src = 'https://openweathermap.org/img/wn/13d.png';
                    break;

                case 'Clouds':
                    image.src = 'https://openweathermap.org/img/wn/04d.png';
                    break;

                case 'Mist':
                    image.src = 'https://openweathermap.org/img/wn/50d.png';
                    break;

                case 'Thunderstorm':
                    image.src = 'https://openweathermap.org/img/wn/11d.png';
                    break;

                case 'Haze':
                    image.src = 'https://openweathermap.org/img/wn/50d.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';


        });


});