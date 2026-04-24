exports.handler = async function (event) {
  const city = event.queryStringParameters.city;

  const API_KEY = process.env.WEATHER_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};