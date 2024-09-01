import React, { useEffect, useState } from "react";
import { recentLocationContainerProps, simpleLocationWeather } from "./types/recentLocationTypes";
import './RecentLocationList.css'

const RecentLocationsContainer: React.FC = () => {
  const [locationsWeather, setLocationsWeather] = useState<simpleLocationWeather[]>(
    [{
      name: 'Springfield',
      country: 'United States',
      curr_temp: 23,
      curr_wx_symbol: 'Rain'
    },
    {
      name: 'Springfield',
      country: 'United States',
      curr_temp: 23,
      curr_wx_symbol: 'Rain'
    },
    {
      name: 'Springfield',
      country: 'United States',
      curr_temp: 23,
      curr_wx_symbol: 'Rain'
    }]
  )

  console.log(locationsWeather)

  return (
    locationsWeather?.map((location, index) => {
      return <div className='recentLocation-item' key={index}>{location.name}</div>
    })
  );
};

export default RecentLocationsContainer;