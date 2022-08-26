import './style.css'
const APIKEY = '6a05651102c94de61e3f7cf2e46a1338'

async function getCurrentWeather(lat, lon) {
    try{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`, {mode: 'cors'}
        )
        const data = await response.json()
        console.log(data);
        
    } catch(error){
        console.log(error);
    }

}



getCurrentWeather(51.5085,-0.1257)