

export default function dataProcess(data){

    const myData = {
        'temp' : data.main.temp,
        'feelslike' : data.main.feels_like,
        'description' : data.weather[0].description,
        'humidity' : data.main.humidity,
        'sunrise' : data.sys.sunrise,
        'sunset' : data.sys.sunset,
    }
    return myData
}