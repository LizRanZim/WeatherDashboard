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

// assign var 
var searchedCity

// assign input value to var above
searchedCity = searchedCityInput.value;
console.log(searchedCity);

// sets value of searched city to local storage
localStorage.setItem("searchedCity1", JSON.stringify(searchedCity));

// gets value of searched city and displays it in searched city area
var getSearchedCity = localStorage.getItem("searchedCity1");

searchedCity1.textContent = JSON.parse(getSearchedCity);

// gets value of searched city and puts it in url for the fetch command


var queryString = 'http://api.openweathermap.org/data/2.5/weather?q='+ searchedCity +',us&units=imperial&APPID=555236abef175d6b5cdeb815c985d1b6';

console.log (queryString);



// fetch('http://api.openweathermap.org/data/2.5/weather?q=Chicago,us&APPID=555236abef175d6b5cdeb815c985d1b6')

// Resource > https://openweathermap.org/api/geocoding-api

// fetch('http://api.openweathermap.org/data/2.5/weather?q=Chicago,us&APPID=555236abef175d6b5cdeb815c985d1b6');

fetch (queryString)

// Endpoint:
// - Please, use the endpoint api.openweathermap.org for your API calls
// - Example of API call:
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=555236abef175d6b5cdeb815c985d1b6

// Useful links:
// - API documentation https://openweathermap.org/api

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  // Vars for where we will put data for today's weather
// function printResults (resultObj) {
//   console.log(resultObj);
//   // set up vars to display results
  
//   var todayTemp = document.querySelector('.todayTemp');

//   var todayWind = document.querySelector('.todayTemp'); 

//   var todayHumidity = document.querySelector('.todayHumidity');

//   var todayUv = document.querySelector('.todayUv');


// }

// printResults(data);




//   Test it out as hard code, reach into box, grab value of input box, get strings together use first part of string + for other part of string

// Once you have the data for the first call, you have to make another call in the same function, you might run into might have to be a nested call or do it with some variables

// Once you get data back, extract that data into variables and grab the data you want to put in those variables




// JSON object is what the object will return store as if we have variable called response we would use dot notation to get to the variable we want response.current.clouds for weather we want response.current.weather[0] and that would give us what is in curly and then to dig deeper into the array we would do response.current.weather.[0].main to grab that value


});


// fetch the data from the weather API current weather and future forecast





// feature 2 save data to display


// declare vars for where the data will show
// declare vars for what data will be passed to API
// function to search for a city on click
// function to check for the city data on day 1 through 4
// display the data

