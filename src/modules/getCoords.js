import { APIKEY } from "../index";
import getCurrentWeather from "./getCurrentWeather";
import get5day3HourlyWeather from "./get5day3HourlyWeather";

export default async function getCoords(cityname, statecode, countrycode){
    try {

        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname},${statecode},${countrycode}&limit=1&appid=${APIKEY}`)
    
        const data = await response.json()
    
        const { lat, lon } = data[0]
        

        getCurrentWeather(lat,lon)
        get5day3HourlyWeather(lat,lon)
       
        

    }catch(error){

        console.log(error);
    }
}
