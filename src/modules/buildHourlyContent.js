
export default function buildHourlyContent(myData) {
    const { unixtime, UTCtime,  temp, feelslike, description, humidity, sunrise, sunset } = myData
    
    const hourlyBlock = document.createElement('div')
    hourlyBlock.classList.add('hourly-block')

    const timeP = document.createElement('p')
    timeP.textContent = UTCtime
    const tempP = document.createElement('p')
    tempP.textContent = temp
    const feelslikeP = document.createElement('p')
    feelslikeP.textContent = feelslike
    const descriptionP = document.createElement('p')
    descriptionP.textContent = description

    
}

