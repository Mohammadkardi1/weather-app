import React, { useRef } from 'react'
import { APIContext } from './Global/APIContext'
import { useContext } from 'react'
import { UilSearch, 
    UilCelsius, 
    UilFahrenheit} from '@iconscout/react-unicons'



export default function Inputs() {
    const inputResearch = useRef(null)
    const {setCity, setUnit } = useContext(APIContext)

    const changeCity = async () => {
        let city = inputResearch.current.value.charAt(0).toUpperCase() + inputResearch.current.value.slice(1)
        setCity(city)
    }

    const changeCelsius = () => {
        setUnit('metric')
    }

    const changeFahrenheit = () => {
        setUnit('imperial')
    }


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            changeCity();
        }
    };

    return (
        <div className='flex justify-between'>
            <div className=' flex justify-between px-2 py-1 bg-white rounded-md'>
                <div className=''  onKeyUp={handleKeyPress}>
                    <input 
                    type="text" 
                    placeholder="Search..."
                    ref={inputResearch}
                    className='rounded-md w-24 sm:w-48 md:w-56 lg:w-72 capitalize 
                        focus:outline-none  text-sm md:text-lg'/>
                </div>
                <div className='flex items-center text-black-900 transition ease-out hover:scale-125'>
                    <button onClick={changeCity}>
                        <UilSearch/>
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center text-white'>
                <div className="flex items-center px-2">
                    <button onClick={changeCelsius}>
                        <UilCelsius className='transition ease-out hover:scale-125'/>
                    </button>
                </div>
                <p className='m-0 flex items-center font-medium'>
                    |
                </p>
                <div className="flex items-center px-2">
                    <button onClick={changeFahrenheit}>
                        <UilFahrenheit className='transition ease-out hover:scale-125'/>
                    </button>
                </div>
            </div>
        </div>
    )
}
