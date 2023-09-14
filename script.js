const apiKey="7f7648b6532c0c36adb3e38a2c4855ed";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkedweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
  if(data.cod==="404"){
      document.querySelector('#error').innerHTML="Please,Enter a valid city";
  }
  else{

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/h';
    document.querySelector('.date').innerHTML = getDate();

}
}
function getDate () {
    const d = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}

const inputbox=document.getElementById('add');
const searchbox=document.getElementById('btn');


searchbox.addEventListener('click',()=>{
    checkedweather(inputbox.value);
})
