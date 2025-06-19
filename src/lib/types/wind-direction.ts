// winddirection.ts
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

export type WindDirectionHourlyUnits = {
  time: string; // iso8601
} & Record<string, string>;

export type WindDirectionHourlyData = {
  time: string[]; // 2025-month-dayT00:00
} & Record<string, number[]>;
