
export default function hourlyDataProcess(data){

    const myData = {
        "unixTime": data.list.dt,
        "UTCTime": data.list.dt_txt,
        'temp' : data.list.main.temp,
        'feelslike' : data.list.main.feels_like,
        'description' : data.list.weather.description,
        'humidity' : data.list.main.humidity,
        'sunrise' : data.city.sunrise,
        'sunset' : data.city.sunset,
    }
    return myData
}