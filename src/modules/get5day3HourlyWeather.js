import { APIKEY } from "../index";
import fromUnixTime from 'date-fns/fromUnixTime'
import hourlyDataProcess from "./hourlyDataProcess";

export default async function get5day3HourlyWeather(lat,lon){
    try{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`)
        const data = await response.json()

        // this will give us the first 3 items of the array(that is 3 3-hour blocks) and for each block we will need to process and build some html
        const threeHourly = data.list.slice(0,3)
        console.log(threeHourly);
        hourlyDataProcess(threeHourly)

    }catch(error){
        console.log(error)
        
    }
}