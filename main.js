import { ICON_MAP } from "./iconMap";
import "./style.css"
import {getWeather} from "./weather";

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)//Europe/Istanbul

getWeather(10,10,Intl.DateTimeFormat().resolvedOptions().timeZone)
  .then(renderWeather)
  .catch( e => {
    console.error(e)
    alert("Error getting weather.")
  })

function renderWeather({current, daily, hourly}) {
  renderCurrentWeather(current)
  // renderDailyWeather(daily)
  // renderHourlyWeather(hourly)

  document.body.classList.remove('blurred')
}

function setValue(selector, value, {parent = document} = {}) {
  parent.querySelector(`[data-${selector}]`).textContent = value;
}

//api'de ki icon kodu fonksiyona geçilerek, kendi ikonlarımızın dosya yoluna uygun bir url oluşturuluyor.
function getIconUrl(iconCode) {
  return `icons/${ICON_MAP.get(iconCode)}.svg`
}

//header' daki icon' u seçiyoruz ve aşağıdaki fonk. içinde bu ögenin src değerini atıyoruz.
const currentIcon = document.querySelector('[data-current-icon]')

function renderCurrentWeather(current) {
  // document.querySelector("[data-current-temp]").textContent = current.currentTemp;
  // tek tek bunu yazmak yerine setValue fonk. kullaniyoruz

  currentIcon.src = getIconUrl(current.iconCode)
  setValue('current-temp', current.currentTemp)
  setValue('current-high', current.highTemp)
  setValue('current-low', current.lowTemp)
  setValue('current-fl-high', current.highFeelsLike)
  setValue('current-fl-low', current.lowFeelsLike)
  setValue('current-wind', current.windSpeed)
  setValue('current-precip', current.precip)
}






























// {latitude: 10, longitude: 10, generationtime_ms: 0.10502338409423828, utc_offset_seconds: 10800, timezone: 'Europe/Istanbul', …}
// current
// : 
// interval
// : 
// 900
// precipitation
// : 
// 0
// temperature_2m
// : 
// 22.8
// time
// : 
// 1724563800
// weather_code
// : 
// 2
// wind_direction_10m
// : 
// 218
// wind_speed_10m
// : 
// 4.1
// [[Prototype]]
// : 
// Object
// current_units
// : 
// {time: 'unixtime', interval: 'seconds', temperature_2m: '°C', precipitation: 'mm', weather_code: 'wmo code', …}
// daily
// : 
// apparent_temperature_max
// : 
// (7) [33.7, 29.9, 31.4, 33.6, 34.2, 30.8, 31.8]
// apparent_temperature_min
// : 
// (7) [27, 26.1, 25.1, 25.3, 27.1, 27.2, 26.2]
// precipitation_sum
// : 
// (7) [9.6, 13.4, 0.1, 2.5, 17.5, 17.1, 1]
// temperature_2m_max
// : 
// (7) [28.9, 26.1, 28.4, 29.6, 29.1, 26.9, 28.1]
// temperature_2m_min
// : 
// (7) [22.7, 23, 22.4, 21.8, 22.5, 22.9, 22.1]
// time
// : 
// (7) [1724533200, 1724619600, 1724706000, 1724792400, 1724878800, 1724965200, 1725051600]
// weather_code
// : 
// (7) [95, 80, 3, 80, 95, 96, 3]
// [[Prototype]]
// : 
// Object
// daily_units
// : 
// {time: 'unixtime', weather_code: 'wmo code', temperature_2m_max: '°C', temperature_2m_min: '°C', apparent_temperature_max: '°C', …}
// elevation
// : 
// 512
// generationtime_ms
// : 
// 0.10502338409423828
// hourly
// : 
// apparent_temperature
// : 
// (168) [28.6, 28.3, 27.8, 27.6, 27.5, …]
// precipitation_probability
// : 
// (168) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, …]
// temperature_2m
// : 
// (168) [23.9, 23.7, 23.4, …]
// time
// : 
// (168) [1724533200, 1724536800, 1724540400, 1724544000, 1724547600, 1724551200, 1724554800, 1724558400, 1724562000, …]
// weather_code
// : 
// (168) [95, 80, 3, 3, 3, 80, 80, …]
// wind_speed_10m
// : 
// (168) [3.7, 4.3, 4.6, 4.3, …]
// [[Prototype]]
// : 
// Object
// hourly_units
// : 
// {time: 'unixtime', temperature_2m: '°C', apparent_temperature: '°C', precipitation_probability: '%', weather_code: 'wmo code', …}
// latitude
// : 
// 10
// longitude
// : 
// 10
// timezone
// : 
// "Europe/Istanbul"
// timezone_abbreviation
// : 
// "+03"
// utc_offset_seconds
// : 
// 10800
// [[Prototype]]
// : 
// Object