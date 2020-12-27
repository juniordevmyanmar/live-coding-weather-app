import React from "react";
import { useParams } from 'react-router'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { useReducerAPI } from '../api'
import MiniCard from '../components/minicard'
import Status from '../components/status'
import Loading from '../components/loading'
import './index.css'
const Detail = ({match : { params : {lat , lng }}}) => {
    

    const WEATHER_KEY = atob(
        process.env.REACT_APP_WEATHER_KEY ||
          "ZDc5ZTQ3M2MyN2UxY2U4NWExNDVjM2E1MWUyM2YyYzU="
      );
    console.log("Key",WEATHER_KEY)

    const currentWeatherState = useReducerAPI(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${WEATHER_KEY}`,
      )

    console.log(currentWeatherState)
    
    

    if(currentWeatherState && currentWeatherState.data && currentWeatherState.data.current) {
        const { daily } = currentWeatherState.data
        const { temp, wind_speed, humidity } = currentWeatherState.data.current
        const { icon, description } = currentWeatherState.data.current.weather[0] 

        return (
            <div data-testid="detail-container" className="container">
            <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="status" />
            <p data-testid="detail-text" className="capitalize font-medium tracking-wider">{description}</p>
            <p className="text-7xl my-8">{temp}&#176;</p>
            <div className="flex justify-center">
              <Status icon={faWind} data={wind_speed} unit="km/h" />
              <Status icon={faTint} data={humidity} unit="%" />
            </div>
            <div className="flex mt-8 overflow-y-scroll">
              {daily.map(({ dt, weather, temp }, index) => (
                <MiniCard datetime={dt} iconcode={weather[0].icon} temperature={temp.max} key={index} />
              ))}
            </div>
          </div>
        )
    }

   return <> {currentWeatherState.loading && <Loading />} </>
    
   
};

export default Detail;