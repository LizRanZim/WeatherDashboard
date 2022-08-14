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

    var searchedCityHero = document.querySelector('.currentCity')

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

    var queryLatLon = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchedCity + '&units=imperial&APPID=555236abef175d6b5cdeb815c985d1b6';

    console.log(queryLatLon);

    // Resource > https://openweathermap.org/api/geocoding-api

    // add if statement so that if response is 404, return message that states 'We couldn't find that city, please try again'
    // if response ===404, 

    fetch(queryLatLon)

      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var latSearchedCity = data.coord.lat
        console.log(latSearchedCity);

        var lonSearchedCity = data.coord.lon
        console.log(lonSearchedCity);

        var queryGetWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latSearchedCity + '&lon=' + lonSearchedCity + '&exclude=hourly,minutely&units=imperial&APPID=555236abef175d6b5cdeb815c985d1b6';

        console.log(queryGetWeather);

        fetch(queryGetWeather)
          .then(function (response) {
            return response.json();
          })
          .then(function (data2) {
            console.log(data2);

            // display icons logic for curent weather
var currentCityIcon = document.querySelector('.currentCityImg');

var currentCityIconCode = data2.current.weather[0].icon
console.log(currentCityIconCode);


var queryGetIcon = 'https://openweathermap.org/img/wn/' + currentCityIconCode + '@2x.png';

console.log(queryGetIcon);

currentCityIcon.setAttribute('src', queryGetIcon);


// use this url syntax to pass the right icon into the url to display it http://openweathermap.org/img/wn/10d@2x.png

// display weather


            var todayTemp = document.querySelector('.todayTemp');

            todayTemp.textContent = data2.current.temp + ' ° F';

            var todayWind = document.querySelector('.todayWind');

            todayWind.textContent = data2.current.wind_speed + ' mph';

            var todayHumidity = document.querySelector('.todayHumidity');

            todayHumidity.textContent = data2.current.humidity + '%';

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
            let today = new Date().toLocaleDateString();

            var nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + 1);

            console.log(today);
            console.log(nextDate);

            var currentDate = document.querySelector('.currentDate');
            currentDate.textContent = today;

            // code to display 5 day forecast

            // create a for loop to loop through the daily forecast and show the future forecast for the next 5 days and create a card for each day with the date, icon, temp, wind, humidity

            var fivedayResults = document.querySelector('.fivedayResults');

            for (var i = 0; i < 5; i++) {
              var fivedayContainer = document.createElement('div');
              fivedayContainer.setAttribute('class', '.col-sm-2 p-3');
              var fivedayCard = document.createElement('div');
              fivedayCard.setAttribute('class', 'card');
              var fivedayCardBody = document.createElement('div');
              fivedayCardBody.setAttribute('class', 'card-body card-color');


              //  Need to figure out date part so it shows the new date for each container (right now just showing dt value from data) maybe easier to use moment.js
              // https://stackoverflow.com/questions/53403249/using-moment-object-in-for-loop

              
              var fivedayDate = document.createElement('h5');
              // const date = moment();
              // fivedayDate.push({ date: date.add(1, "days").format("YYYY-MM-DD") });

              fivedayDate.textContent = data2.daily[i].dt;
              // var readable_date = (dtDate).toDateString(); 
              // console.log(readable_date);
              // fivedayDate.textContent = readable_date;  

              var fivedayTemp = document.createElement('h6');
              fivedayTemp.textContent = 'Temp: ' + data2.daily[i].temp.day + ' ° F';
              var fivedayWind = document.createElement('h6');
              fivedayWind.textContent = 'Wind: ' + data2.daily[i].wind_speed + ' mph';
              var fivedayHumidity = document.createElement('h6');
              fivedayHumidity.textContent = 'Humidity: ' + data2.daily[i].humidity + '%';

              fivedayResults.append(fivedayContainer);
              fivedayContainer.append(fivedayCard);
              fivedayCard.append(fivedayCardBody);
              fivedayCardBody.append(fivedayDate);
              fivedayCardBody.append(fivedayTemp);
              fivedayCardBody.append(fivedayWind);
              fivedayCardBody.append(fivedayHumidity);
            }
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

