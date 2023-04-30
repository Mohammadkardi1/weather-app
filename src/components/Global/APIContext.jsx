import { useEffect, useState } from "react";
import { createContext } from "react";
import getFormattedWeatherData from "../../services/weatherService";

export const APIContext = createContext()


export const APIContextProvider = ({children}) => {

    const [APIDataContext, setAPIDataContext] = useState()
    const [isLoading, setIsLoading ] = useState(false)
    const [city, setCity] = useState("london")
    const [unit, setUnit] = useState("metric")

    const fetchWeather = async () => {
        setIsLoading(false)
        const data = await getFormattedWeatherData({q: city, units: unit})
        setAPIDataContext(data)
        setIsLoading(true)
    }

    useEffect(() => {
        fetchWeather()
    }, [city, unit])

    const value = {
        APIDataContext, 
        setAPIDataContext,
        isLoading,
        setCity,
        setUnit,
        unit
        
    }
    return (
        <APIContext.Provider value={value}>
            {children}
        </APIContext.Provider>
    )
}