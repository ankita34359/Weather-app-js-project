// Get ref to the HTML element using getElementById we will be working with 
const getWeatherButton = document.getElementById("get-weather-btn");

const cityInput = document.getElementById("city");

const WeatherDetails = document.getElementById("weather");


// Add a click event listener to the "Get weather" button 

getWeatherButton.addEventListener("click", () => {
    // get the value of the user's input
    const city = cityInput.value.trim();

    //  Construct the API url using the user 
const apiKey = "7e255630562345c7f0b88ecacaa325db";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// sent the fetch request to the OpenWeatherMap api using the URL 

    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {

      // extract relevant weather information from the API response 

      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;


      // format the weather information as HTML
      const weatherHTML = `
      <h2>${city.toUpperCase()}</h2>
      <p>Temperature: ${temperature}&deg;C </p>
      <p>Description: ${description} </p>
      <p>Wind Speed: ${windSpeed} m/s </p>
      <p>Humidity: ${humidity} % </p>
      `;
      
     // update the weather details container in the Dom with the HTML we created 
      
      WeatherDetails.innerHTML = weatherHTML;
    })

  })






