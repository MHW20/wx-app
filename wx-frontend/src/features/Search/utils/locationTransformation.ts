import { LocationInfo } from "../types/searchTypes"

export const changeCountryCodeToCountry = (locationData: LocationInfo[]): LocationInfo[] => {
  const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' })
  const newLocationData = locationData.map((location) => {

    if (location.country) {
      let fullCountryName = regionNamesInEnglish.of(location.country)

      if (fullCountryName) return { ...location, country: fullCountryName }
    }
    return location
  });

  return newLocationData
}