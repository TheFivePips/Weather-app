import { APIKEY } from "../index";
import fromUnixTime from 'date-fns/fromUnixTime'

export default async function get5day3HourlyWeather(lat,lon){
    try{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`)
        const data = await response.json()

        console.log(data.list);

    }catch(error){
        console.log(error)
        
    }
}