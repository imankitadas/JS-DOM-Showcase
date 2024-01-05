// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element



let data;

const searchbox = document.getElementById("searchbox")
const countryName = document.getElementById("countryname")
const stateName = document.getElementById("stateName")
const cityName = document.getElementById("cityName")

const humidity = document.getElementById("humidity")
const windspeed = document.getElementById("windspeed")
const temprature = document.getElementById("temprature")
const logoImage = document.getElementById("logoImage")
const weatherStatus = document.getElementById("weatherStatus")


const getData = async (event) =>{ 
    event.preventDefault();
    if(!searchbox.value){ 
        alert("Please Enter The City Name: ")
        return;
    }

    
    const city = searchbox.value;
     
    // Fetch Details
    
    const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=de196cc425a347c792075926232512&q=${city}`);

    const convertData = await fetchData.json();
    data = convertData;
    console.log(data);

    // Displaying the data in HTML 
    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;

    humidity.innerHTML = data.current.humidity;
    windspeed.innerHTML = data.current.wind_kph;
    temprature.innerHTML = data.current.temp_c;
    logoImage.src = data.current.condition.icon;
    weatherStatus.innerHTML = data.current.condition.text;
}
