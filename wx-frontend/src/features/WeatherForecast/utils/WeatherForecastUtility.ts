export const metersPerSecondToMilesPerHour = (metersPerSecond: number): number => {
  const milesPerHour = (metersPerSecond / 1609.34) * 3600
  return Math.round(milesPerHour)
}
