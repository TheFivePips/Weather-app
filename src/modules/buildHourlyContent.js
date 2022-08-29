// import { utcToZonedTime } from "date-fns-tz"
export default function buildHourlyContent(myData) {
    const { UTCTime,  temp, feelslike, description } = myData

    // const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    
    
    const hourlyBlock = document.createElement('div')
    hourlyBlock.classList.add('hourly-block')

    const timeP = document.createElement('p')
    timeP.textContent = UTCTime.split(' ')[1]
    const tempP = document.createElement('p')
    tempP.textContent = `Temp: ${Math.round(temp)} C`
    const feelslikeP = document.createElement('p')
    feelslikeP.textContent = `Feels Like: ${Math.round(feelslike)} C`
    const descriptionP = document.createElement('p')
    descriptionP.textContent = description

    hourlyBlock.appendChild(timeP)
    hourlyBlock.appendChild(tempP)
    hourlyBlock.appendChild(feelslikeP)
    hourlyBlock.appendChild(descriptionP)
   
    return hourlyBlock

}

