import type { Days, otherHeights, temperatureHeights } from "../types";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";
const LOC = "latitude=52.3025&longitude=4.6889";
const TZ = "timezone=Europe%2FBerlin";

// rain forecast in hoofddorp timezone europe/berlin.
// to change days edit the number in "&forecast_days1" to either 1, 3, 7, 14 or 16.
// custom forecast length can be done (up to 3 months) but requires different extension.
export function buildRainUrl(day: Days): string {
  return `${BASE_URL}?${LOC}&hourly=rain&${TZ}&forecast_days=${day}`;
}

// temperature forecast in hoofddorp timezone europe/berlin.
// to change temperature height, change the number in "&hourly=temperature_2m" to either 2, 80, 120, 180
export function buildTemperatureUrl(day: Days, height: temperatureHeights): string {
  return `${BASE_URL}?${LOC}&hourly=temperature_${height}m&${TZ}&forecast_days=${day}`;
}

// wind direction forecast in hoofddorp timezone europe/berlin.
// to change wind direction height change the number in "wind_speed_10m" to either 10, 80, 120, 180.
export function buildWindDirectionUrl(day: Days, height: otherHeights): string {
  return `${BASE_URL}?${LOC}&hourly=wind_direction_${height}m&${TZ}&forecast_days=${day}`;
}

// wind speed forecast in hoofddorp timezone europe/berlin.
// to change wind speed height change the number in "wind_speed_10m" to either 10, 80, 120, 180.
export function buildWindSpeedUrl(day: Days, height: otherHeights): string {
  return `${BASE_URL}?${LOC}&hourly=wind_speed_${height}m&${TZ}&forecast_days=${day}`;
}
