import React, { useEffect, useMemo, useState } from "react"
import { WeatherForecastContainerProps, WeatherForecastDetailed, WeatherForecastMeta, WeatherForecastResponse, WeatherListItem } from "./types/weatherForecastTypes";
import { useFetchForecast, useForecast } from "./hooks/weatherForecastHook";
import WeatherForecastSummary from "./WeatherForecastSummary";
import WeatherForecast from "./WeatherForecast";

const WeatherForecastContainer: React.FC<WeatherForecastContainerProps> = ({
  selectedLocation
}) => {
  const { isSuccess, data: fullWeatherInfo } = useFetchForecast(selectedLocation.lat, selectedLocation.lon);
  const [metaForecast, detailedForecast, parseAndTransformForecast] = useForecast();
  const [selectedForecastDate, setSelectedForecastDate] = useState<number>(0);
  
  const handleSelectedForecastDate = (index: number) => {
    setSelectedForecastDate(index);
    console.log('Selected Date Index: ', index)
  };
  
  useMemo(() => {
    if (isSuccess && fullWeatherInfo) {
      parseAndTransformForecast(fullWeatherInfo);
    }
  }, [isSuccess, fullWeatherInfo]);


  
  return (
    <>
      {metaForecast && (
        <WeatherForecastSummary
          metaWeatherForecast={metaForecast}
          handleSelectedForecastDate={handleSelectedForecastDate}
        />
      )}
      { detailedForecast?.length > 0 && (
        <WeatherForecast 
          detailedWeatherForecast={detailedForecast} 
          selectedForecastDate={selectedForecastDate}
        />
      )}
    </>
  );
}

export default WeatherForecastContainer;