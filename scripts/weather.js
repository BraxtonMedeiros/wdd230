// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=27fdded6837f24c58e32a15ff1a8ac3e';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(data) {

    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
    const weatherEvents = data.weather.map(event => {
  
      const words = event.description.toLowerCase().split(' ');
  
      const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
      const description = capitalizedWords.join(' ');
  
      return description;
  
    }).join('');
  
    weatherIcon.setAttribute('src', iconsrc);
  
    weatherIcon.setAttribute('alt', 'Weather Events');
  
    captionDesc.textContent = weatherEvents;
  
    console.log(weatherEvents);
  
  }