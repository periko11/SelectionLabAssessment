export * from "./rain";
export * from "./temperature";
export * from "./wind-speed";
export * from "./wind-direction";

export type Days = 1 | 3 | 7 | 14 | 16;
export type temperatureHeights = 2 | 80 | 120 | 180;
export type otherHeights = 10 | 80 | 120 | 180;
export const validDays: Days[] = [1, 3, 7, 14, 16];
export const validTemperatureHeights: temperatureHeights[] = [2, 80, 120, 180];
export const validOtherHeights: otherHeights[] = [10, 80, 120, 180];
