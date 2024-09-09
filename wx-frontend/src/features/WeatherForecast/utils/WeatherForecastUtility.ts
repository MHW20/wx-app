export const metersPerSecondToMilesPerHour = (metersPerSecond: number): number => {
  const milesPerHour = (metersPerSecond / 1609.34) * 3600
  return Math.round(milesPerHour)
}

export function getDayOfWeekString(date: Date): string {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}