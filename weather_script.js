const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API_KEY = '00ac3852ea6bcce4c4e9e230855c7a54';
const CITY = 'London';

async function getWeather(city) {
    if (!API_KEY) {
        throw new Error('Missing OpenWeatherMap API key. Set the OPENWEATHER_API_KEY environment variable.');
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${data.message}`);
    }
    return data;
}

// Example usage:
getWeather(CITY)
    .then(data => {
        console.log(`Weather in ${CITY}:`, data.weather[0].description);
        console.log(`Temperature: ${data.main.temp}°C`);
    })
    .catch(err => console.error(err));