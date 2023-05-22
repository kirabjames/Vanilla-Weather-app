function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
}

let apikey = "18850dff4bd6a23b322d88b9429e7a82";
let apiurl =
  "https://api.openweathermap.org/data/2.5/weather?q=Phoenix&appid=$8850dff4bd6a23b322d88b9429e7a82&units=metric";

axios.get(apiUrl).then(displayTemperature);
