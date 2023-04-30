import { DateTime } from "luxon";

const API_KEY = '91925c590438a65389bdc7ca850eadde';
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})
    return fetch(url)
    .then((res) => res.json())
}

const formatCurrentWeather = (data) => {
    let {
        coord : {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity },
        name,
        timezone,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data
    const {main: details, icon } = weather[0]
    dt = OwnFormatDate(dt, timezone)
    sunrise = OwnFormatDate(sunrise, timezone, "hh:mm a")
    sunset = OwnFormatDate(sunset, timezone, "hh:mm a")

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, 
        name, dt, timezone, country, sunrise, sunset, details, icon, speed
    }
}

const formatForecastWeather = (data,timezone) => {
    const forecastData = data.list
    let hourly = forecastData.slice(0,4).map(d => {
        return {
            temp: d.main.temp,
            dt: OwnFormatDate(d.dt,timezone, "hh:mm a"),
            icon: d.weather[0].icon,
        }
    })
    let daily = forecastData.filter((_, index) => index !==0 && index % 8 === 0).map(d => {
        return {
            temp: d.main.temp,
            dt: OwnFormatDate(d.dt,timezone, "ccc"),
            icon: d.weather[0].icon,
        }
    })
    console.log("forecastData", forecastData)
    return { hourly, daily}
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
    .then(formatCurrentWeather)
    const {lat, lon} = formattedCurrentWeather
    const formattedForecasetWeather = await getWeatherData('forecast', {
        lat, 
        lon,
        units:searchParams.units,
    }).then((data) => {
        return formatForecastWeather(data, formattedCurrentWeather.timezone)
    })
    return {...formattedCurrentWeather,...formattedForecasetWeather}
} 

const OwnFormatDate = (timestamp, timezone,format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a" ) => {
    const { DateTime } = require('luxon');
    const timeZoneName = `UTC${timezone >= 0 ? '+' : '-'}${Math.abs(timezone / 3600)}`;
    const formattedDateTime = DateTime.fromSeconds(timestamp).setZone(timeZoneName).toFormat(format);
    return formattedDateTime
}


export default getFormattedWeatherData