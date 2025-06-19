export interface WindSpeedResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: WindSpeedHourlyUnits;
  hourly: WindSpeedHourlyData;
}

interface WindSpeedHourlyUnits {
  time: string; // iso8601
  wind_speed_10m: string; // km/h
}

interface WindSpeedHourlyData {
  time: string[]; // 2025-month-dayT00:00
  wind_speed_10m: number[];
}
