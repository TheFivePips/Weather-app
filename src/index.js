import './style.css'
import Logo from '../assets/logo.jpeg'
import getCoords from './modules/getCoords'

export const APIKEY = '6a05651102c94de61e3f7cf2e46a1338'

const logo = document.getElementById('logo')
logo.src = Logo

const searchBtn = document.getElementById('searchbtn')

searchBtn.addEventListener('click', function(e){
    e.preventDefault()
    let input = document.getElementById('input').value
    let location = input.split(', ')
    let cityname = location[0]
    let statecode = location[1]
    let countrycode = location[2]
    getCoords(cityname, statecode, countrycode)
})