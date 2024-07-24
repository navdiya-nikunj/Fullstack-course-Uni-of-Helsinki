import axios from "axios"

const getWeather = (cityName: string) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`).then((res)=>{
        return res.data;
    })
}
export {getWeather};