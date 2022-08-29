import { APIKEY } from "../index";
import hourlyDataProcess from "./hourlyDataProcess";
import buildHourlyContent from "./buildHourlyContent";

export default async function get5day3HourlyWeather(lat,lon,){
    try{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`)
        const data = await response.json()
        

        // this will give us the first 3 items of the array(that is 3 3-hour blocks) and for each block we will need to process and build some html
        const threeHourly = data.list.slice(0,3)
        // console.log(threeHourly);
        threeHourly.forEach(block => {

           const hourlyContent = document.querySelector('.hourly-content')
           hourlyContent.appendChild(buildHourlyContent(hourlyDataProcess(block)))
        })

    }catch(error){
        console.log(error)
        
    }
}