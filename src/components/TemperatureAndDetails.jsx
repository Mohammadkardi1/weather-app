import React from 'react'
import { useContext } from 'react'
import { APIContext } from './Global/APIContext'

import { UilTemperature, 
    UilTear,
    UilWind,
    UilBrightness,
    UilSunset,
    UilArrowUp,
    UilArrowDown} from '@iconscout/react-unicons'



export default function TemperatureAndDetails() {

    const {APIDataContext } = useContext(APIContext)

    return (
        <div className='flex flex-col gap-9 mt-8 text-white'>
            <div>
                <p className='text-cyan-400 font-medium text-lg text-center'>
                    {APIDataContext.details}
                </p>
            </div>
            <div className='flex flex-col gap-y-3 justify-between items-center md:flex-row'>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${APIDataContext.icon}@2x.png`} alt="" />
                </div>
                <div className='text-4xl font-normal tracking-wider '>
                    {parseInt(APIDataContext.temp)}°
                </div>
                <div>
                    <ul className='space-y-1 font-extralight text-md '>
                        <li className='flex gap-1'>
                            <UilTemperature/>
                            Real feel: <span className='font-medium'>{parseInt(APIDataContext.feels_like)}°</span>
                        </li>
                        <li className='flex gap-1'>
                            <UilTear/>
                            Humidity: <span className='font-medium'>{APIDataContext.humidity}%</span>
                        </li>
                        <li className='flex gap-1'>
                            <UilWind/>
                            Wind: <span className='font-medium'>{parseInt(APIDataContext.speed)} km/h</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-3 md:flex-row'>
                <div className='flex flex-col md:flex-row font-light'>
                    <p>
                        <UilBrightness className='inline me-1'/>
                        Rise: <span className='font-medium'>{APIDataContext.sunrise}</span>
                    </p>
                    <p className='mx-2 font-light hidden md:block'>
                        <span className='mx-2'>|</span>
                    </p>
                    <p>
                        <UilSunset className='inline me-1'/>
                        Set: <span className='font-medium'>{APIDataContext.sunset}</span>
                    </p>
                </div>
                <p className='mx-2 font-light hidden md:block'>
                    |
                </p>
                <div className='flex flex-col md:flex-row font-light'>
                    <p>
                        <UilArrowUp className='inline me-1'/>
                        High: <span className='font-medium'>{parseInt(APIDataContext.temp_max)}°</span>
                    </p>
                    <p className='mx-2 font-light hidden md:block'>
                        <span className='mx-2'>|</span>
                    </p>
                    <p>
                        <UilArrowDown className='inline me-1'/>
                        Low: <span className='font-medium'>{parseInt(APIDataContext.temp_min)}°</span>
                    </p>
                </div>
                <p className='font-light'>
                </p>
            </div>
        </div>
    )
}
