import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/weatherSlice'
import locationReducer from './location/locationSlice'

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    location: locationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;