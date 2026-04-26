exports.handler = async function (event) {
  const city = event.queryStringParameters.city;
  const API_KEY = process.env.WEATHER_KEY;

  // Current weather
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const weatherData = await weatherRes.json();

  // Forecast
  const forecastRes = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  const forecastData = await forecastRes.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      weather: weatherData,
      forecast: forecastData,
    }),
  };
};
