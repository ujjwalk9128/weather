function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'eff8f17f70ebe5f98f0e2ca0703c0cec'; // Replace with your OpenWeatherMap API key

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    });
}
