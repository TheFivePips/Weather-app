
export default function buildHourlyContent(myData) {
    const { unixtime, UTCTime,  temp, feelslike, description, humidity, sunrise, sunset } = myData
    console.log(description);
    
    const hourlyBlock = document.createElement('div')
    hourlyBlock.classList.add('hourly-block')

    const timeP = document.createElement('p')
    timeP.textContent = UTCTime
    const tempP = document.createElement('p')
    tempP.textContent = `Temp: ${temp}`
    const feelslikeP = document.createElement('p')
    feelslikeP.textContent = `Feels Like: ${feelslike}`
    const descriptionP = document.createElement('p')
    descriptionP.textContent = description

    hourlyBlock.appendChild(timeP)
    hourlyBlock.appendChild(tempP)
    hourlyBlock.appendChild(feelslikeP)
    hourlyBlock.appendChild(descriptionP)
   
    return hourlyBlock

}

