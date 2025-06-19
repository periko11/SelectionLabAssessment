export interface WindDirectionResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: WindDirectionHourlyUnits;
  hourly: WindDirectionHourlyData;
}

export interface WindDirectionHourlyUnits {
  time: string; // "iso8601"
  wind_direction_10m: string; // "°" / degree
}

export interface WindDirectionHourlyData {
  time: string[]; // 2025-month-dayT00:00
  wind_direction_10m: number[];
}
