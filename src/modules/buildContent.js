import Cloudy from '../../assets/cloudy.svg'
import PartlyCloudy from '../../assets/partly-cloudy.svg'
import Rainy from '../../assets/rainy.svg'
import Sunny from '../../assets/sunny.svg'


export default function buildContent(myData, name) {
    const { temp, feelslike, description, humidity } = myData

    const icon = document.getElementById('weather-icon')
    if(description === "cloudy" || description === "scattered clouds"){
        
        icon.src = Cloudy
    }
    if(description === "rainy" || description === "light rain"){
        
        icon.src = Rainy
    }
    if(description === "sunny" || description === "clear sky"){
        
        icon.src = Sunny
    }
    else {
        icon.src = PartlyCloudy
    }

    const tempSpan = document.getElementById('temp')
    tempSpan.textContent = `${Math.round(temp)} C`

    const feelsLikeSpan = document.getElementById('feels-like')
    feelsLikeSpan.textContent = `Feels Like: ${Math.round(feelslike)} C`
        
    const descriptionh4 = document.getElementById('description')
    descriptionh4.textContent = description
    

    const humidityh4 = document.getElementById('humidity')
    humidityh4.textContent = `Humidity: ${humidity} %`

    const locationName = document.querySelector('.location-name')
    locationName.textContent = name
}

