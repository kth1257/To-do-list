const API_KEY = "23a9f66d509da61c1cb629e0d434a010";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live it" , lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText =  data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
  });
}
function onGeoError(){
  alert("위치 정보가 없어 날씨를 알 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);