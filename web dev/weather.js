// Event listener when the button is clicked
document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchWeather(city);  // Call fetchWeather with the city entered
    } else {
        alert('Please enter a city!');
    }
});

// Function to fetch weather data
function fetchWeather(city) {
    const apiKey = "14b551f7b20a2d6bad647537ab05f233"; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())  // Parse the response to JSON
        .then(data => {  // This is where data is defined and accessed
            if (data.cod === 200) {  // Check if the request was successful
                console.log(data); // Log the data to see the structure
                document.getElementById('weather-description').textContent = `Condition: ${data.weather[0].description}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

                // Show the weather result div
                document.getElementById('weather-result').classList.remove('hidden');
                document.getElementById('error-message').classList.add('hidden');
            } else {
                document.getElementById('error-message').classList.remove('hidden');
                document.getElementById('weather-result').classList.add('hidden');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

  