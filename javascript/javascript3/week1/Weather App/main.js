let inputValue = document.querySelector(".inputValue");
let buttonForInput = document.querySelector(".buttonForInput");
let buttonLocation = document.querySelector(".buttonLocation");

let city = document.querySelector(".city");
let temp = document.querySelector(".temp");

let iFTWeather = document.querySelector(".iFTWeather");
let iconimg = document.createElement("img");
let windspeed = document.querySelector(".windspeed");
let hClowdy = document.querySelector(".hClowdy");
let SunrisTo = document.querySelector(".SunrisTo");
let SunsetTo = document.querySelector(".SunsetTo");

buttonForInput.addEventListener("click", () => {
  const apiUri = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}
&appid=3f9781b65d09b084b2f1f07fc5f75557`;

  async function weatherApp() {
    const response = await fetch(apiUri);
    const date = await response.json();
    console.log(date);

    let cityName = ` ${date["name"]}, ${date["sys"]["country"]}`;
    let temp1 = `Temperature: ${
      date["main"]["temp"]}`;

    iconimg.src = `http://openweathermap.org/img/w/${date["weather"][0]["icon"]}.png`;

    let windspeed1 = `Wind speed: ${date["wind"]["speed"]}`;
    let hClowdy1 = `Clowdy is: ${date["main"]["feels_like"]}`;
    let Sunrise = new Date(date["sys"]["sunrise"] * 1000);
    let Sunset = new Date(date["sys"]["sunset"] * 1000);
    let Sunrise1 = `Sunrise is: ${Sunrise.toLocaleTimeString()}`;
    let Sunset1 = `Sunset is: ${Sunset.toLocaleTimeString()}`;

    let maplat = date["coord"]["lat"];
    let maplon = date["coord"]["lon"];

    const map = L.map("map").setView([maplat, maplon], 10);

    const tilUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    const tiles = L.tileLayer(tilUrl);
    tiles.addTo(map);

    L.marker([maplat, maplon]).addTo(map);

    city.innerHTML = cityName;
    temp.innerHTML = temp1;
    iFTWeather.appendChild(iconimg);
    iconimg.innerHTML = iconimg;
    windspeed.innerHTML = windspeed1;
    hClowdy.innerHTML = hClowdy1;
    SunrisTo.innerHTML = Sunrise1;
    SunsetTo.innerHTML = Sunset1;
  }
  weatherApp();
});

buttonLocation.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(mylo);

  function mylo(position) {
    const mymaplat = position.coords.latitude;
    const mymaplon = position.coords.longitude;

    const mymap = L.map("mymap").setView([mymaplat, mymaplon], 12);

    const mytilUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    const mytiles = L.tileLayer(mytilUrl);
    mytiles.addTo(mymap);

    L.marker([mymaplat, mymaplon]).addTo(mymap);
  }
});
