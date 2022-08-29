import Cloudy from '../../assets/cloudy.svg'
import PartlyCloudy from '../../assets/partly-cloudy.svg'
import Rainy from '../../assets/rainy.svg'
import Sunny from '../../assets/sunny.svg'

import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'


export default function buildContent(myData) {
    const { temp, feelslike, description, humidity, sunrise, sunset } = myData

    const icon = document.getElementById('weather-icon')
    if(description === "cloudy"){
        
        icon.src = Cloudy
    }
    if(description === "rainy"){
        
        icon.src = Rainy
    }
    if(description === "sunny"){
        
        icon.src = Sunny
    }
    else {
        icon.src = PartlyCloudy
    }

    const tempSpan = document.getElementById('temp')
    tempSpan.textContent = temp

    const feelsLikeSpan = document.getElementById('feels-like')
    feelsLikeSpan.textContent = ` ${feelslike}`
        
    const descriptionh4 = document.getElementById('description')
    descriptionh4.textContent = description
    

    const humidityh4 = document.getElementById('humidity')
    humidityh4.textContent = ` ${humidity} %`

    const sunriseSpan = document.getElementById('sunrise')
    // console.log(format(parseISO(fromUnixTime(sunrise)), 'p'));

    sunriseSpan.textContent = ` ${fromUnixTime(sunrise).toUTCString().split(' ')[4]}`

    const sunsetSpan = document.getElementById('sunset')
    sunsetSpan.textContent = ` ${fromUnixTime(sunset).toUTCString().split(' ')[4]}`
}

