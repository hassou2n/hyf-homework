const inputValue = document.querySelector(".inputValue");
const buttonForInput = document.querySelector(".buttonForInput");

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");

const iFTWeather = document.querySelector(".iFTWeather");
const iconimg = document.createElement("img");
const windspeed = document.querySelector(".windspeed");
const hClowdy = document.querySelector(".hClowdy");
const SunrisTo = document.querySelector(".SunrisTo");
const SunsetTo = document.querySelector(".SunsetTo");

buttonForInput.addEventListener("click", () => {
  const apiUri = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}
&appid=3f9781b65d09b084b2f1f07fc5f75557`;

  async function weatherApp() {
    const response = await fetch(apiUri);
    const date = await response.json();
    console.log(date);

    const cityName = ` ${date["name"]}, ${date["sys"]["country"]}`;
    const temp1 = `Temperature: ${date["main"]["temp"]}`;

    iconimg.src = `http://openweathermap.org/img/w/${date["weather"][0]["icon"]}.png`;

    const windspeed1 = `Wind speed: ${date["wind"]["speed"]}`;
    const hClowdy1 = `Clowdy is: ${date["main"]["feels_like"]}`;
    const Sunrise = new Date(date["sys"]["sunrise"] * 1000);
    const Sunset = new Date(date["sys"]["sunset"] * 1000);
    const Sunrise1 = `Sunrise is: ${Sunrise.toLocaleTimeString()}`;
    const Sunset1 = `Sunset is: ${Sunset.toLocaleTimeString()}`;

    const maplat = date["coord"]["lat"];
    const maplon = date["coord"]["lon"];

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

// I will modify it later

// let buttonLocation = document.querySelector(".buttonLocation");
// buttonLocation.addEventListener("click", () => {
//   navigator.geolocation.getCurrentPosition(mylo);

//   function mylo(position) {
//     const mymaplat = position.coords.latitude;
//     const mymaplon = position.coords.longitude;

//     const mymap = L.map("mymap").setView([mymaplat, mymaplon], 12);

//     const mytilUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

//     const mytiles = L.tileLayer(mytilUrl);
//     mytiles.addTo(mymap);

//     L.marker([mymaplat, mymaplon]).addTo(mymap);
//   }
// });
