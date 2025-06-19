export interface RainResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: RainHourlyUnits;
  hourly: RainHourlyData;
}

export interface RainHourlyUnits {
  time: string; // "iso8601"
  rain: string; // "mm"
}

export interface RainHourlyData {
  time: string[]; // 2025-month-dayT00:00
  rain: number[];
}
