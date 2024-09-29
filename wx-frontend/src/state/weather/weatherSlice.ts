import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeatherForecastDetailed, WeatherForecastMeta } from "../../features/WeatherForecast/types/weatherForecastTypes";

interface WeatherState {
  weatherDetailed: WeatherForecastDetailed[][];
  weatherMeta: WeatherForecastMeta | {}
}

const initialState: WeatherState = {
  weatherDetailed: [[]],
  weatherMeta: {}
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateWeatherDetailed: (state, action: PayloadAction<WeatherForecastDetailed[][]>) => {
      state.weatherDetailed = action.payload
    },
    updateWeatherMeta: (state, action: PayloadAction<WeatherForecastMeta>) => {
      state.weatherMeta = action.payload
    },
  }
});

export const { updateWeatherDetailed, updateWeatherMeta } = weatherSlice.actions;

export default weatherSlice.reducer;