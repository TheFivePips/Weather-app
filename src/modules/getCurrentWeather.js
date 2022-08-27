import { APIKEY } from "../index";
import buildContent from "./buildContent";
import dataProcess from "./dataProcess";


export default async function getCurrentWeather(lat, lon){
    try{
        
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial `)
        const weather = await res.json()
        
        buildContent(dataProcess(weather))

    }catch(error){
        console.log(error);
    }
}