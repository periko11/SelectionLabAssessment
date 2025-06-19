// windspeed.ts
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

export type WindSpeedHourlyUnits = {
  time: string; // iso8601
} & Record<string, string>;

export type WindSpeedHourlyData = {
  time: string[]; // 2025-month-dayT00:00
} & Record<string, number[]>;
