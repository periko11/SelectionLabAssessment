import type {
  Days,
  otherHeights,
  temperatureHeights,
  RainResponse,
  TemperatureResponse,
  WindDirectionResponse,
  WindSpeedResponse,
} from "../types";
import {
  buildRainUrl,
  buildTemperatureUrl,
  buildWindDirectionUrl,
  buildWindSpeedUrl,
} from "./url-builder";

export async function fetchRain(x: Days): Promise<RainResponse> {
  const res = await fetch(buildRainUrl(x));
  if (!res.ok) throw new Error("Failed to fetch rain");
  return await res.json();
}

export async function fetchTemperature(
  x: Days,
  y: temperatureHeights
): Promise<TemperatureResponse> {
  const res = await fetch(buildTemperatureUrl(x, y));
  if (!res.ok) throw new Error("Failed to fetch temperature");
  return await res.json();
}

export async function fetchWindDirection(
  x: Days,
  y: otherHeights
): Promise<WindDirectionResponse> {
  const res = await fetch(buildWindDirectionUrl(x, y));
  if (!res.ok) throw new Error("Failed to fetch wind direction");
  return await res.json();
}

export async function fetchWindspeed(x: Days, y: otherHeights): Promise<WindSpeedResponse> {
  const res = await fetch(buildWindSpeedUrl(x, y));
  if (!res.ok) throw new Error("Failed to fetch wind speed");
  return await res.json();
}
