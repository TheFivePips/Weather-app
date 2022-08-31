import { APIKEY } from "../index";
import buildContent from "./buildContent";
import dataProcess from "./dataProcess";


export default async function getCurrentWeather(lat, lon, name){
    try{
        // if the toggle is set to F run the regular code, if set to C run the metric code
        
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`, {mode: 'cors'})
       
            
        const weather = await res.json()
        
        
        buildContent(dataProcess(weather),name)

    }catch(error){
        console.error(err.message)
    }
}