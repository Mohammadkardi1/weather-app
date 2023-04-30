import React from 'react'
import { useContext } from 'react'
import { APIContext } from './Global/APIContext'


export default function TimeAndLocation() {

    const {APIDataContext } = useContext(APIContext)

    return (
        <div className='flex flex-col items-center gap-5 pt-8 text-white'>
            <div 
                className='flex flex-col md:flex-row text-white-100 text-center text-gray-300 font-light text-xl'>
                {APIDataContext.dt }
            </div>
            <h1 className='font-medium text-2xl'>
                {APIDataContext.name}
            </h1>
        </div>
    )
}
