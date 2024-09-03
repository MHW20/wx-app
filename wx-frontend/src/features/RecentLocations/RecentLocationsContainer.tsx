import React, { useEffect, useState } from "react";
import { simpleLocationWeather } from "./types/recentLocationTypes";
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
      return (
        <div className='recent-location-item' key={index}>
          <div className='wx-meta' id='location-name'>
            <div>{location.name}</div>
          </div>
          <div className='wx-details' id='location-temp'>
            <div>{location.curr_temp}</div>
          </div>
          <div className='arrow-column'>
            <div>{'>'}</div>
          </div>
          <div className='wx-meta' id='location-country'>
            <div>{location.country}</div>
          </div>
          <div className='wx-details' id='location-wx-symbol'>
            <div>{location.curr_wx_symbol}</div>
          </div>
        </div>
      ) 
    })
  );
};

export default RecentLocationsContainer;