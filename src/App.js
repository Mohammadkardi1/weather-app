import './App.css';
import { TopButtons } from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import ForecastSection from './components/UI/ForecastSection';
import { useContext } from 'react';
import { APIContext } from './components/Global/APIContext';
import getFormattedWeatherData from './services/weatherService';


function App() {

  const {APIDataContext, isLoading, unit} = useContext(APIContext)
  const formatBackground = () => {
    if (unit === "metric") {
      return "from-cyan-700 to-blue-700"
    } else {
      return "from-yellow-700 to-orange-700"
    }
  }

  return (
    <div 
      className={`mx-auto max-w-screen-md py-6 px-5 sm:px-8 md:px-10 h-fit shadow-xl shadow-grey-400
      bg-gradient-to-br ${formatBackground()} `}>
      <TopButtons />
      <Inputs/>
      { isLoading &&
        <>
          <TimeAndLocation/>
          <TemperatureAndDetails/>
          <ForecastSection title={"hourly forecast"} forecat_items={APIDataContext.hourly}/>
          <ForecastSection title={"Daily forecast"}  forecat_items={APIDataContext.daily}/>
        </>
      }
    </div>
  );
}

export default App;
