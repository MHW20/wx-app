import React, { useEffect, useState } from "react";
import { recentLocationsContainerProps, simpleLocationWeather } from "./types/recentLocationTypes";
import './RecentLocationList.css'
import { LocationInfo } from "../Search/types/searchTypes";
import { updateSelectedLocation } from "../../state/location/locationSlice";
import { useDispatch } from "react-redux";

const RecentLocationsContainer: React.FC<recentLocationsContainerProps> = ({
}) => {
  const dispatch = useDispatch()

  const [locationsMeta, setLocationsMeta] = useState<LocationInfo[]>(
    [{
      name:"Springfield",
      local_names:{"uk":"Спрингфілд","en":"Springfield","lt":"Springfildas","pl":"Springfield","ru":"Спрингфилд","ta":"ஸ்பிரிங்ஃபீல்ட்"},
      lat:39.7990175,
      lon:-89.6439575,
      country:"US",
      state:"Illinois"
    },
    {
      name:"Springfield",
      local_names:{"uk":"Спрингфілд","en":"Springfield","lt":"Springfildas","pl":"Springfield","ru":"Спрингфилд","ta":"ஸ்பிரிங்ஃபீல்ட்"},
      lat:39.7990175,
      lon:-89.6439575,
      country:"US",
      state:"Illinois"
    },
    {
      name:"Springfield",
      local_names:{"uk":"Спрингфілд","en":"Springfield","lt":"Springfildas","pl":"Springfield","ru":"Спрингфилд","ta":"ஸ்பிரிங்ஃபீல்ட்"},
      lat:39.7990175,
      lon:-89.6439575,
      country:"US",
      state:"Illinois"
    }]
  )

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


  const handleSelectedLocation = (index: number) => {
    const selectedLocation = locationsMeta[index];
    dispatch(updateSelectedLocation(selectedLocation));
  }

  return (
    locationsWeather?.map((location, index) => {
      return (
        <div 
          className='recent-location-item' 
          key={index}
          onClick={() => handleSelectedLocation(index)}
        >
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