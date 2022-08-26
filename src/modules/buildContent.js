
export default function buildContent(myData) {
    
    const tempSpan = document.getElementById('temp')
    tempSpan.textContent = myData.temp

    const feelsLikeSpan = document.getElementById('feels-like')
    feelsLikeSpan.textContent = myData.feelslike
        
    const descriptionh4 = document.getElementById('description')
    descriptionh4.textContent = myData.description

    const humidityh4 = document.getElementById('humidity')
    humidityh4.textContent = myData.humidity

    const sunriseSpan = document.getElementById('sunrise')
    sunriseSpan.textContent = myData.sunrise

    const sunsetSpan = document.getElementById('sunset')
    sunsetSpan.textContent = myData.sunset
}

