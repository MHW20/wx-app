import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocationInfo } from "../../features/Search/types/searchTypes";

interface LocationState {
  locations: LocationInfo[]
  toggleRecentLocations: boolean
  selectedLocation: LocationInfo | undefined
}

const initialState: LocationState = {
  locations: [],
  toggleRecentLocations: true,
  selectedLocation: undefined
};

const weatherSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocations: (state, action: PayloadAction<LocationInfo[]>) => {
      state.locations = action.payload
    },
    updateToggleRecentLocations: (state, action: PayloadAction<boolean>) => {
      state.toggleRecentLocations = action.payload
    },
    updateSelectedLocation: (state, action: PayloadAction<LocationInfo>) => {
      console.log('UPDATE SELECTED LOCATION REDUCER')
      state.selectedLocation = action.payload
    },
  }
});

export const { updateLocations, updateToggleRecentLocations, updateSelectedLocation } = weatherSlice.actions;

export default weatherSlice.reducer;