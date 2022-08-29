
export default function hourlyDataProcess(data){
    console.log(data);

    const myData = {
        "UTCTime": data.dt_txt,
        "unixTime": data.dt,
        'temp' : data.main.temp,
        'feelslike' : data.main.feels_like,
        'description' : data.weather[0].description,
        'humidity' : data.main.humidity,
        
    }
    return myData
}