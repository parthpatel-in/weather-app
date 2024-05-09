// provided by rapid api
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f50ea05e4bmsh82f191ad0333c6fp1c9c8ejsncf72f7dbe2f0",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = (city) =>{
  CityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

   
cloud_pct.innerHTML=response.cloud_pct
feels_like.innerHTML=response.feels_like
humidity.innerHTML=response.humidity
humidity2.innerHTML=response.humidity
max_temp.innerHTML=response.max_temp
min_temp.innerHTML=response.min_temp
sunrise.innerHTML=response.sunrise
sunset.innerHTML=response.sunset
temp.innerHTML=response.temp
temp2.innerHTML=response.temp
wind_degrees.innerHTML=response.wind_degrees
 wind_speed.innerHTML =response.wind_speed 
 wind_speed2.innerHTML =response.wind_speed 
 
  })
  .catch((err) => console.log(err));
}

const btn = document.getElementById('submit');
submit.addEventListener("click", (e)=>{
  e.preventDefault()
 
getweather(city.value)

})

const citiesData = {
  shanghai: {},
  boston: {},
  lucknow: {},
  kolkata: {}
};
function updateWeatherTable() {
  Object.keys(citiesData).forEach(CityName => {
    const row = document.querySelector(`tr[data-city="${city}"]`);

  // Update the table cells with the fetched data
  row.cells[1].innerHTML= Response. CLOUD_PCT;
  row.cells[2].innerHTML= Response. FEELS_LIKE;
  // row.cells[3].textContent = weatherData.main.humidity;
  // row.cells[4].textContent = weatherData.main.temp_max;
  // row.cells[5].textContent = weatherData.main.temp_min;
  // row.cells[6].textContent = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
  // row.cells[7].textContent = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();
  // row.cells[8].textContent = weatherData.main.temp;
  // row.cells[9].textContent = weatherData.wind.deg;
  // row.cells[10].textContent = weatherData.wind.speed;
});
}



    getweather("Delhi")
    updateWeatherTable()

  
  


