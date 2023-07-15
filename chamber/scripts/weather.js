// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('.forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=27fdded6837f24c58e32a15ff1a8ac3e';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.82&lon=-111.79&units=imperial&appid=27fdded6837f24c58e32a15ff1a8ac3e';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayCurrentWeather(data); // display current weather
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
  
  try {
    const forecastResponse = await fetch(forecastUrl);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      console.log(forecastData); // testing only
      displayForecast(forecastData); // display forecast
    } else {
      throw Error(await forecastResponse.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const weatherEvents = data.weather.map(event => {
    const words = event.description.toLowerCase().split(' '); //Clear Sky => clear sky => ["clear", "sky"]
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const description = capitalizedWords.join(' ');
    return description;
  }).join('');
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', 'Weather Events');
  captionDesc.textContent = weatherEvents;
  console.log(weatherEvents);
}

function displayForecast(data) {
  const forecastData = data.list.filter((item, index) => index % 8 === 0); // Get the forecast data for every 24 hours (3-day forecast)

  const threeDayResult = forecastData.slice(1,4);
  
  forecastContainer.innerHTML = ''; // Clear previous forecast data
  
  threeDayResult.forEach(forecast => {
    const forecastDate = new Date(forecast.dt_txt);
    const temperature = forecast.main.temp.toFixed(0);
    const icon = forecast.weather[0].icon;
    const description = forecast.weather[0].description;

    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');

    const dateElement = document.createElement('p');
    dateElement.textContent = forecastDate.toDateString();
    forecastItem.appendChild(dateElement);

    const temperatureElement = document.createElement('p');
    temperatureElement.innerHTML = `${temperature}&deg;F`;
    forecastItem.appendChild(temperatureElement);

    const iconElement = document.createElement('img');
    iconElement.src = `https://openweathermap.org/img/w/${icon}.png`;
    iconElement.alt = description;
    forecastItem.appendChild(iconElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    forecastItem.appendChild(descriptionElement);

    forecastContainer.appendChild(forecastItem);
  });
}
