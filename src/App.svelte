<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { loader } from "./lib/api/loader";
  import {
    fetchRain,
    fetchTemperature,
    fetchWindDirection,
    fetchWindspeed,
  } from "./lib/api/fetch";
  import type { Days, temperatureHeights, otherHeights } from "./lib/types";
  import { validDays, validTemperatureHeights, validOtherHeights } from "./lib/types";
  import ForecastChart from "./lib/components/ForecastChart.svelte";

  // — State & Config —
  const categories = ["Temperature", "Rain", "Wind Speed", "Wind Direction"].sort((a, b) =>
    a.localeCompare(b)
  );

  let chartCategory: string | null = null;
  let categoryForHeights: string | null = null;
  let categoryForDays: string | null = null;
  let selectedHeight!: temperatureHeights | otherHeights;

  let showChartcard = false;
  let chartLabels: string[] = [];
  let chartData: number[] = [];
  let chartLabel = "";
  let chartColor = "";

  // — Helpers —
  async function loadData(fetchFn: () => Promise<any>) {
    return loader(fetchFn);
  }

  function onSelectHeight(category: string, height: temperatureHeights | otherHeights) {
    selectedHeight = height;
    categoryForHeights = null;
    categoryForDays = category;
  }

  async function onSelectDay(
    category: string,
    day: Days,
    height: temperatureHeights | otherHeights
  ) {
    chartCategory = category;
    categoryForDays = null;
    showChartcard = true;

    if (category === "Rain") {
      const res = await loadData(() => fetchRain(day));
      chartLabel = "Rain (mm)";
      chartColor = "rgba(54,162,235,1)";
      chartLabels = res.hourly.time;
      chartData = res.hourly.rain;
    } else if (category === "Temperature") {
      const res = await loadData(() => fetchTemperature(day, height as temperatureHeights));
      chartLabel = `Temp (${height}m °C)`;
      chartColor = "rgba(255,99,132,1)";
      const key = `temperature_${height}m`;
      chartLabels = res.hourly.time;
      chartData = (res.hourly as any)[key] as number[];
    } else if (category === "Wind Speed") {
      const res = await loadData(() => fetchWindspeed(day, height as otherHeights));
      chartLabel = `Wind Speed (${height}m km/h)`;
      chartColor = "rgba(75,192,192,1)";
      const key = `wind_speed_${height}m`;
      chartLabels = res.hourly.time;
      chartData = (res.hourly as any)[key] as number[];
    } else {
      const res = await loadData(() => fetchWindDirection(day, height as otherHeights));
      chartLabel = `Wind Dir (${height}m °)`;
      chartColor = "rgba(153,102,255,1)";
      const key = `wind_direction_${height}m`;
      chartLabels = res.hourly.time;
      chartData = (res.hourly as any)[key] as number[];
    }
  }

  function closeDropdowns() {
    categoryForHeights = null;
    categoryForDays = null;
  }

  onMount(() => window.addEventListener("click", closeDropdowns));
  onDestroy(() => window.removeEventListener("click", closeDropdowns));
</script>

<main class="min-h-screen w-full overflow-y-auto bg-cyan-300">
  <div class="min-h-screen w-full bg-[url(./assets/DenHaag.png)] bg-cover bg-fixed bg-center">
    <!-- Header -->
    <div class="flex justify-center py-12">
      <h1 class="text-3xl font-bold text-cyan-600 sm:text-6xl">The Selection Lab Assessment</h1>
    </div>

    <!-- Weather Forecast Toggle -->
    <div class="flex justify-center pb-12">
      <button
        class="text-xl font-thin text-white focus:outline-none sm:text-4xl"
        on:click|stopPropagation={() => (showChartcard = !showChartcard)}>
        Weather Forecast
      </button>
    </div>

    <!-- Categories Grid -->
    <div
      class="mx-auto grid w-3/4 max-w-screen-lg grid-cols-1 gap-4 p-4 text-xl text-amber-100
             sm:grid-cols-2 lg:grid-cols-4">
      {#each categories as c}
        <div class="relative w-full">
          <!-- Category Button -->
          <button
            class="w-full rounded-4xl bg-blue-500 p-4 text-white"
            on:click|stopPropagation={() => {
              if (chartCategory && chartCategory !== c) {
                showChartcard = false;
                chartCategory = null;
              }

              if (c === "Rain") {
                categoryForHeights = null;
                categoryForDays = categoryForDays === c ? null : c;
              } else {
                categoryForHeights = categoryForHeights === c ? null : c;
                categoryForDays = null;
              }
            }}>
            {c}
          </button>

          <!-- Heights Dropdown -->
          {#if categoryForHeights === c}
            <div
              role="menu"
              tabindex="0"
              class="absolute top-full z-50 w-full rounded-4xl bg-white p-2 text-black shadow-lg"
              on:click|stopPropagation
              on:keydown|stopPropagation>
              {#each c === "Temperature" ? validTemperatureHeights : validOtherHeights as h}
                <button
                  role="menuitem"
                  class="block w-full px-4 py-2 text-left hover:bg-gray-200"
                  on:click|stopPropagation={() => onSelectHeight(c, h)}>
                  {h} m
                </button>
              {/each}
            </div>
          {/if}

          <!-- Days Dropdown -->
          {#if categoryForDays === c}
            <div
              role="menu"
              tabindex="0"
              class="absolute top-full z-50 w-full rounded-4xl bg-white p-2 text-black shadow-lg"
              on:click|stopPropagation
              on:keydown|stopPropagation>
              {#each validDays as d}
                <button
                  role="menuitem"
                  class="block w-full px-4 py-2 text-center hover:bg-gray-200"
                  on:click|stopPropagation={() => onSelectDay(c, d, selectedHeight)}>
                  {d} day{d > 1 ? "s" : ""}
                </button>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Chart Card -->
    {#if showChartcard}
      <div class="mt-24 flex justify-center p-4">
        <div class="relative z-40 h-[50vh] w-4/5 rounded-4xl bg-gray-700 p-2 shadow-lg">
          <ForecastChart
            labels={chartLabels}
            data={chartData}
            label={chartLabel}
            borderColor={chartColor} />
        </div>
      </div>
    {/if}
  </div>

  <!-- Hint -->
  <div class="fixed right-2 bottom-2 text-[.5rem] text-white opacity-70">
    click Weather Forecast
  </div>
</main>
