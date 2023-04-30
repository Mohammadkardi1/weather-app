import React from 'react'

export default function ForecastSection({title,forecat_items}) {
    return (
        <div className='mt-8 text-white'>
            <h1 
                className='uppercase border-b-2 pb-1 mb-4 text-base	sm:text-lg'>
                {title}
            </h1>
            <div className='flex justify-between '>
                {
                    forecat_items.map((item, index ) => (
                        <div 
                            key={index}
                            className='flex flex-col justify-center items-center gap-y-3
                                text-[0.6rem] sm:text-sm md:text-base'>
                            <p className=''>
                                {item.dt}
                            </p>
                            <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="" />
                            <p className=''>{parseInt(item.temp)}°</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
