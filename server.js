const axios = require('axios');

// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = "2fc30f519447d795197adc505612ad24";
const city = "London"; // Replace with the desired city name

// OpenWeatherMap API endpoint for current weather
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Function to get weather information
const getWeather = async () => {
  // Make a GET request to the OpenWeatherMap API
  const response = await axios.get(apiUrl);

  // Extract relevant information from the response
  const { name, weather, main } = response.data;

  // Log the weather information
  console.log(`City: ${name}`);
  console.log(`Weather: ${weather[0].description}`);
  console.log(`Temperature: ${main.temp}°C`);
  console.log(`Humidity: ${main.humidity}%`);
};

// Call the function to get weather information
getWeather();
