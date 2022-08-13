// feature 1 get data from api

// addEventListener to the search button

var searchBtn = document.querySelector("#button-addon2");

var searchedCity1 = document.querySelector(".searchedCity1")

searchBtn.addEventListener("click",

// tests event listener
function () {
    console.log('fun times');
      

// on click reach into input box

var searchedCityInput = document.querySelector("#searchedCity")

var searchedCityHero = document.querySelector ('.currentCity')

// assign var 
var searchedCity

// assign input value to var above
searchedCity = searchedCityInput.value;
console.log(searchedCity);

searchedCityHero.textContent = searchedCityInput.value;

// sets value of searched city to local storage
localStorage.setItem("searchedCity1", JSON.stringify(searchedCity));

// gets value of searched city and displays it in searched city area
var getSearchedCity = localStorage.getItem("searchedCity1");

searchedCity1.textContent = JSON.parse(getSearchedCity);

// gets value of searched city and puts it in url for the fetch command

// get lat and lon of searched city



// function () {

// }

// Replace url with https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

var queryLatLon = 'http://api.openweathermap.org/data/2.5/weather?q='+ searchedCity +',us&units=imperial&APPID=555236abef175d6b5cdeb815c985d1b6';

console.log (queryLatLon);

// Resource > https://openweathermap.org/api/geocoding-api


fetch (queryLatLon)

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

var latSearchedCity = data.coord.lat
console.log(latSearchedCity);

var lonSearchedCity = data.coord.lon
console.log(lonSearchedCity);

var queryGetWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ latSearchedCity +'&lon='+ lonSearchedCity+'&exclude=hourly,minutely&units=imperial&APPID=555236abef175d6b5cdeb815c985d1b6';

console.log(queryGetWeather);

fetch(queryGetWeather)
.then(function (response) {
  return response.json();
})
.then (function (data2) {
  console.log(data2);


var todayTemp = document.querySelector('.todayTemp');

todayTemp.textContent = data.main.temp + ' ° F';

var todayWind = document.querySelector('.todayWind'); 

todayWind.textContent = data.wind.speed + ' mph';

var todayHumidity = document.querySelector('.todayHumidity');

todayHumidity.textContent = data.main.humidity + '%';

var todayUv = document.querySelector('.todayUv');

todayUv.textContent = data2.current.uvi;

// code to log whether background color class should switch
// if (data2.current.uvi <=2) {
//   console.log(favorable);
// } else if (data2.current.uvi >=5){
//   console.log(moderate);
// } else {
//   console.log(severe)}


// code to display date
var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;
console.log (today)

// code to display 5 day forecast

// create a for loop to loop through the daily forecast and show the future forecast for the next 5 days and create a card for each day with the date, icon, temp, wind, humidity
  
})

})
  
  });





//   Test it out as hard code, reach into box, grab value of input box, get strings together use first part of string + for other part of string

// Once you have the data for the first call, you have to make another call in the same function, you might run into might have to be a nested call or do it with some variables

// Once you get data back, extract that data into variables and grab the data you want to put in those variables




// JSON object is what the object will return store as if we have variable called response we would use dot notation to get to the variable we want response.current.clouds for weather we want response.current.weather[0] and that would give us what is in curly and then to dig deeper into the array we would do response.current.weather.[0].main to grab that value





// fetch the data from the weather API current weather and future forecast





// feature 2 save data to display


// declare vars for where the data will show
// declare vars for what data will be passed to API
// function to search for a city on click
// function to check for the city data on day 1 through 4
// display the data

