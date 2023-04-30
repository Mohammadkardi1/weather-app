import React, { useContext } from 'react'
import { APIContext } from './Global/APIContext'


const cities = [
    {
        id: 1,
        title: 'London'
    },
    {
        id: 2,
        title: 'Sydney'
    },
    {
        id: 3,
        title: 'Toronto'
    },
    {
        id: 4,
        title: 'Tokyo'
    },
    {
        id: 5,
        title: 'Paris'
    },
]

export const TopButtons = () => {

    const {setCity} = useContext(APIContext)

    const changeCity = async (city) => {
        setCity(city)
        console.log("changeCity")
    }


    return (
        <div 
            className='flex justify-between g-2 md:gap-4 mb-4 '>
                {
                    cities.map((city, index) => (
                        <button
                            className='text-white font-medium  text-xs sm:text-sm md:text-lg transition ease-out hover:scale-125'
                            key={index}
                            onClick={() => changeCity(city.title)}>
                            {city.title}
                        </button>
                    ))
                }
        </div>
    )
}
