// feature 1 get data from api

// addEventListener to the search button

let searchBtn = document.querySelector("#button-addon2");

let searchedCity1 = document.querySelector(".searchedCity1")

searchBtn.addEventListener("click", getWeather);

function getWeather(event) {
  // tests event listener
  // console.log('fun times');



  console.log(event)

  // on click reach into input box
  let searchedCity
  let searchedCityInput;

  if (event.srcElement.id === 'button-addon2') {
    searchedCityInput = document.querySelector("#searchedCity").value;
    document.querySelector("#searchedCity").value = '';

  } else {
    console.log(event.srcElement.id);
    searchedCityInput = event.srcElement.id;
  }

  let searchedCityHero = document.querySelector('.currentCity')

  // assign let 

  // assign input value to let above
  searchedCity = searchedCityInput;
  console.log(searchedCity);

  searchedCityHero.textContent = searchedCityInput.value;

  // sets value of searched city to local storage
  localStorage.setItem("searchedCity1", JSON.stringify(searchedCity));

  // // gets value of searched city and displays it in searched city area
  // let getSearchedCity = localStorage.getItem("searchedCity1");

  // *** make the searched city a url using a href from line 76, will need to do this after line 76   
  // searchedCity1.textContent = JSON.parse(getSearchedCity);

  // ***need to create an a href here that reloads the page with the value of searched city already filled in

  // gets value of searched city and puts it in url for the fetch command

  // get lat and lon of searched city


  let queryLatLon = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchedCity + '&units=imperial&APPID=DELETED';

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

      let latSearchedCity = data.coord.lat
      console.log(latSearchedCity);

      let lonSearchedCity = data.coord.lon
      console.log(lonSearchedCity);

      let queryGetWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latSearchedCity + '&lon=' + lonSearchedCity + '&exclude=hourly,minutely&units=imperial&APPID=DELETED';

      console.log(queryGetWeather);
console.log(event.srcElement.id);

      if (event.srcElement.id === 'button-addon2') {

        
        // sets url for searched city to local storage
        localStorage.setItem("searchedCityurl",queryGetWeather);
  
  
        // try creating a button instead
        // add an event listener that on click calls get weather w/ the city name
  
        // ***applies url for searched city to searched city, not working
        let searchedCityBtn = document.createElement('button');
  
        // creates link to point to Boston Data API
        searchedCityBtn.textContent = searchedCity;
  
        searchedCityBtn.setAttribute('value', searchedCity);
        searchedCityBtn.setAttribute('id', searchedCity);
        searchedCityBtn.setAttribute('class','btn fun-color btn-outline-secondary');
  
        searchedCityBtn.addEventListener('click', getWeather);
  
  
  
        searchedCity1.append(searchedCityBtn);
      }



      fetch(queryGetWeather)
        .then(function (response) {
          return response.json();
        })
        .then(function (data2) {
          console.log(data2);

          // display icons logic for curent weather
          let currentCityIcon = document.querySelector('.currentCityImg');

          let currentCityIconCode = data2.current.weather[0].icon
          console.log(currentCityIconCode);


          let queryGetIcon = 'https://openweathermap.org/img/wn/' + currentCityIconCode + '@2x.png';

          console.log(queryGetIcon);

          currentCityIcon.setAttribute('src', queryGetIcon);


          // display current weather


          let todayTemp = document.querySelector('.todayTemp');

          todayTemp.textContent = data2.current.temp + ' ° F';

          let todayWind = document.querySelector('.todayWind');

          todayWind.textContent = data2.current.wind_speed + ' mph';

          let todayHumidity = document.querySelector('.todayHumidity');

          todayHumidity.textContent = data2.current.humidity + '%';

          let todayUv = document.querySelector('#todayUv');
          todayUv.textContent = data2.current.uvi;

          // ***FIXED**this sets the color to change depending on uvi value 
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


          let todayMoment = moment().format("MMM Do YYYY");
          let Day1Moment = moment().add(1, 'days').format("MMM Do YYYY");
          let Day2Moment = moment().add(2, 'days').format("MMM Do YYYY");
          let Day3Moment = moment().add(3, 'days').format("MMM Do YYYY");
          let Day4Moment = moment().add(4, 'days').format("MMM Do YYYY");
          let Day5Moment = moment().add(5, 'days').format("MMM Do YYYY");


          console.log(todayMoment)
          console.log(Day1Moment)
          console.log(Day2Moment)
          console.log(Day3Moment)
          console.log(Day4Moment)
          console.log(Day5Moment)

          let DaysMoment = [Day1Moment, Day2Moment, Day3Moment, Day4Moment, Day5Moment]

          let currentDate = document.querySelector('.currentDate');
          currentDate.textContent = todayMoment;

          // code to display 5 day forecast


          let fivedayResults = document.querySelector('.fivedayResults');
          console.log(fivedayResults);
          console.dir(fivedayResults);
          // if fiveDayResults has a child ||
          if (fivedayResults.children.length === 1) {
            /// remove function
            fivedayResults.children[0].remove();
          } 
          // if there exist a fivedayconating or the dom
          // let fivedayContainer = document.querySelector('#fiveDayContainer');
          // if (fivedayContainer !== null) {
          //   fivedayContainer.remove()
          // }
          // -- remove that container element.remove


          const fivedayContainer = document.createElement('div');
          fivedayContainer.setAttribute('class', '.col-sm-2 p-3');
          fivedayContainer.setAttribute('id', 'fiveDayContainer');
          
          for (let i = 0; i < 5; i++) {
            console.log('!!!!!!!',data2.daily);

            // look here to try figure it out, because the div should not be recreating itself
            
            let fivedayCard = document.createElement('div');
            fivedayCard.setAttribute('class', 'card');
            let fivedayCardBody = document.createElement('div');
            fivedayCardBody.setAttribute('class', 'card-body card-color');



            let fivedayDate = document.createElement('h5');


            fivedayDate.textContent = DaysMoment[i];

            // creates icon for 5 day

            let fiveDayIcon = document.createElement('img');

            let FiveDayCityIconCode = data2.daily[i].weather[0].icon
            console.log(FiveDayCityIconCode);


            let FiveDayQueryGetIcon = 'https://openweathermap.org/img/wn/' + FiveDayCityIconCode + '@2x.png';

            console.log(FiveDayQueryGetIcon);

            fiveDayIcon.setAttribute('src', FiveDayQueryGetIcon);


            // creates html and populates it based on weather data

            let fivedayTemp = document.createElement('h6');
            fivedayTemp.textContent = 'Temp: ' + data2.daily[i].temp.day + ' ° F';
            let fivedayWind = document.createElement('h6');
            fivedayWind.textContent = 'Wind: ' + data2.daily[i].wind_speed + ' mph';
            let fivedayHumidity = document.createElement('h6');
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
}

// ***need to fix, when made buttons for search history, the 5 day forecast isn't updating and switching for the new city when clicked

  // on page load add get from local storage

  // window.location API location.refresh will allow to get access to current url and history of url, give access to reload, upon reload, upon reload get search city from local storage and load the page with that info

  // init on page load store lat and lon into local storage

  // stretch goal, don't need call lat lon API on page load since its already in local storage