export interface TemperatureResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: HourlyData;
}

export type HourlyUnits = {
  time: string; // iso8601
} & Record<string, string>;

export type HourlyData = {
  time: string[]; // 2025-month-dayT00:00
} & Record<string, number[]>;
