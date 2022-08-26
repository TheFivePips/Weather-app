import './style.css'
import buildContent from './modules/buildContent'

export const APIKEY = '6a05651102c94de61e3f7cf2e46a1338'


const searchBtn = document.getElementById('searchbtn')

const content = document.querySelector('.content')

searchBtn.addEventListener('click', async function(e){
    e.preventDefault()
    let input = document.getElementById('input').value
    let location = input.split(', ')
    let cityname = location[0]
    let statecode = location[1]
    let countrycode = location[2]

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname},${statecode},${countrycode}&appid=${APIKEY}&units=imperial`)
    const data = await res.json()

    
    buildContent(data)
    // content.appendChild()
    
    
})

