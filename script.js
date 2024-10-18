let searchField=document.getElementsByClassName('div2')[0];
let display=document.getElementById('display');
let loading=document.getElementById('image');

let searchBar=document.getElementById('search');

function weatherHandler(){
    searchField.classList.remove('div2');
    searchField.classList.add('afterClick');

}


function searchHandler(){
 

 let cityName=searchBar.value;

 if(cityName == "")
 return display.innerHTML=`<h1> Enter The City Name First </h1>`  

 searchBar.value="";

 searchField.classList.add('div2');
 searchField.classList.remove('afterClick');


 fetchApi(cityName);
}

async function fetchApi(city){
    try {
         loading.style.display='block';
        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00398b13000e9d439805e3b4207ef79c&units=metric`)
        let data=await res.json();
         
        loading.style.display='none';   
        console.log(data);
        show(data);

        
 }
    catch (error) {
         return display.innerHTML=`<h1> Enter Valid Data </h1>`
    }
}

function show(data){
    display.innerHTML=`
   <div class="div3">

       <h2>${data.name}</h2>
       <h4>${data.weather[0].description}</h4>
          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
       <h1> ${data.main.temp}°C</h1>
     </div>

     <div class="div4">
        <div class="wind">
           <img src="./assets/wind.png" alt="">
           <h4>WINDSPEED</h4>
           <h5>${data.wind.speed} m/s</h5>
        </div>

        <div class="humidity">
           <img src="./assets/humidity.png" alt="">
           <h4>HUMIDITY</h4>
           <h5>${data.main.humidity}%</h5>
        </div>

        <div class="clouds">
           <img src="./assets/cloud.png" alt="">
           <h4>CLOUDS</h4>
           <h5>${data.clouds.all}</h5>
        </div>
     </div> `

}
    