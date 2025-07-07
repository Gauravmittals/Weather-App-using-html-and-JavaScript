const input=document.querySelector('input');
const btn=document.getElementById('btn');
const icon=document.querySelector('.icon');
const weather=document.querySelector('.weather');
const temperature=document.querySelector('.temperature');
const desc=document.querySelector('.description');

btn.addEventListener('click',()=>{
  let city=input.value;
  getWeather(city);
})
function getWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'452089083699635b00979bb245473e05'}`).then(response=>response.json()).then(data=>{console.log(data);
  const iconCode=data.weather[0].icon;

  icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt='weather Icon'/>`
  const weatherCity=data.name;
  const weatherCountry=data.sys.country;
  weather.innerHTML=`${weatherCity},${weatherCountry}`;

  let weatherTem=data.main.temp;
  weatherTem=(weatherTem-273);
  const temp=weatherTem.toFixed(2);
  temperature.innerHTML=`${temp}°C`;

  const description=data.weather[0].description;
  desc.innerHTML=`${description}`;
  })
}








