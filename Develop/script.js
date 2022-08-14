// feature 1 get data from api

// addEventListener to the search button

var searchBtn = document.querySelector("#button-addon2");

var searchedCity1 = document.querySelector(".searchedCity1")

searchBtn.addEventListener("click",


  function () {
    // tests event listener
    // console.log('fun times');


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


            // display current weather


            var todayTemp = document.querySelector('.todayTemp');

            todayTemp.textContent = data2.current.temp + ' ° F';

            var todayWind = document.querySelector('.todayWind');

            todayWind.textContent = data2.current.wind_speed + ' mph';

            var todayHumidity = document.querySelector('.todayHumidity');

            todayHumidity.textContent = data2.current.humidity + '%';

            var todayUv = document.querySelector('.todayUv');
            todayUv.textContent = data2.current.uvi;

            // this sets the color to change depending on uvi value however it is causing the uvi not to change on when I enter a new city. If I comment it out the uvi updates as expected.
            if (data2.current.uvi >= 0 && data2.current.uvi <= 2) {
              console.log('favorable');
              todayUv.setAttribute('class', 'favorable');


            } else if (data2.current.uvi > 2 && data2.current.uvi < 6) {
              console.log('moderate');
              todayUv.setAttribute('class', 'moderate');

            } else {
              console.log('severe');
              todayUv.setAttribute('class', 'severe');

            }



            // Code to set the date and array so that for loop can grab it


            var todayMoment = moment().format("MMM Do YYYY");
            var Day1Moment = moment().add(1, 'days').format("MMM Do YYYY");
            var Day2Moment = moment().add(2, 'days').format("MMM Do YYYY");
            var Day3Moment = moment().add(3, 'days').format("MMM Do YYYY");
            var Day4Moment = moment().add(4, 'days').format("MMM Do YYYY");
            var Day5Moment = moment().add(5, 'days').format("MMM Do YYYY");


            console.log(todayMoment)
            console.log(Day1Moment)
            console.log(Day2Moment)
            console.log(Day3Moment)
            console.log(Day4Moment)
            console.log(Day5Moment)

            var DaysMoment = [Day1Moment, Day2Moment, Day3Moment, Day4Moment, Day5Moment]

            var currentDate = document.querySelector('.currentDate');
            currentDate.textContent = todayMoment;

            // code to display 5 day forecast


            var fivedayResults = document.querySelector('.fivedayResults');

            for (var i = 0; i < 5; i++) {
              var fivedayContainer = document.createElement('div');
              fivedayContainer.setAttribute('class', '.col-sm-2 p-3');
              var fivedayCard = document.createElement('div');
              fivedayCard.setAttribute('class', 'card');
              var fivedayCardBody = document.createElement('div');
              fivedayCardBody.setAttribute('class', 'card-body card-color');



              var fivedayDate = document.createElement('h5');


              fivedayDate.textContent = DaysMoment[i];

              // creates icon for 5 day

              var fiveDayIcon = document.createElement('img');

              var FiveDayCityIconCode = data2.daily[i].weather[0].icon
              console.log(FiveDayCityIconCode);


              var FiveDayQueryGetIcon = 'https://openweathermap.org/img/wn/' + FiveDayCityIconCode + '@2x.png';

              console.log(FiveDayQueryGetIcon);

              fiveDayIcon.setAttribute('src', FiveDayQueryGetIcon);


              // creates html and populates it based on weather data

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
              fivedayCardBody.append(fiveDayIcon)
              fivedayCardBody.append(fivedayTemp);
              fivedayCardBody.append(fivedayWind);
              fivedayCardBody.append(fivedayHumidity);
            }
          })

      })
    return
  });
