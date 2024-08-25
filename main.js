import "./style.css"
import {getWeather} from "./weather";

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)//Europe/Istanbul

getWeather(10,10,Intl.DateTimeFormat().resolvedOptions().timeZone).then( (data) => {
  console.log(data)
})