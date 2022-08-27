
export default function buildContent(myData) {
    const { temp, feelslike, description, humidity, sunrise, sunset } = myData
    
    const tempSpan = document.getElementById('temp')
    tempSpan.textContent = temp

    const feelsLikeSpan = document.getElementById('feels-like')
    feelsLikeSpan.textContent = feelslike
        
    const descriptionh4 = document.getElementById('description')
    descriptionh4.textContent = description

    const humidityh4 = document.getElementById('humidity')
    humidityh4.textContent = humidity

    const sunriseSpan = document.getElementById('sunrise')
    sunriseSpan.textContent = sunrise

    const sunsetSpan = document.getElementById('sunset')
    sunsetSpan.textContent = sunset
}

