
export default function buildContent(data) {
    console.log(data);
    const temp = data.main.temp
    const tempSpan = document.getElementById('temp')
    tempSpan.textContent = temp

    const feelslike = data.main.feels_like
    const feelsLikeSpan = document.getElementById('feels-like')
    feelsLikeSpan.textContent = feelslike
        
    const description = data.weather[0].description
    const descriptionh4 = document.getElementById('description')
    descriptionh4.textContent = description

    const humidity = data.main.humidity
    const humidityh4 = document.getElementById('humidity')
    humidityh4.textContent = humidity

    const sunrise = data.sys.sunrise
    const sunriseSpan = document.getElementById('sunrise')
    sunriseSpan.textContent = sunrise

    const sunset = data.sys.sunset
    const sunsetSpan = document.getElementById('sunset')
    sunsetSpan.textContent = sunset
}