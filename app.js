"use strict";

const api = {
  baseurl: "http://api.weatherapi.com/v1/",
  key: "31bfbbd3eb5d4fed83f231619212310",
};

const box = document.querySelector("#sbox");

box.addEventListener("keypress", setWeather);

function setWeather(e) {
  if (e.keyCode == 13) {
    getWeather(box.value);
  }
}

function getWeather(query) {
  fetch(`${api.baseurl}current.json?key=${api.key}&q=${query}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayWiev);
}

function displayWiev(weather) {
  console.log(weather);
  const cName = document.querySelector(".c_name");
  cName.innerHTML = `${weather.location.country}, ${weather.location.region} , ${weather.location.name}`;
// week

  const d = new Date();

  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  
  let day = weekday[d.getDay()];

  console.log(day);


const date=document.querySelector(".date");
date.innerHTML=`${weather.current.last_updated}, ${day}`
const temp=document.querySelector(".temp");
temp.innerHTML=`${Math.round(weather.current.temp_c)}°<span>C</span><img src="${weather.current.condition.icon}" alt="cloud">`;
const wt=document.querySelector(".wt");
wt.innerHTML=`${weather.current.condition.text}`;
const wtType=document.querySelector(".wt-type");
wtType.innerHTML=`${Math.round(weather.current.feelslike_c)}°C /  ${Math.round(weather.current.temp_c)}°C`

}
