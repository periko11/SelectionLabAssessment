<script lang="ts">
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  export let labels: string[] = [];
  export let data: number[] = [];
  export let label: string = "";
  export let borderColor = "rgba(75,192,192,1)";

  let canvasEl: HTMLCanvasElement;
  let chart: Chart;

  onMount(() => {
    chart = new Chart(canvasEl, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            borderColor,
            fill: false,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { type: "category", display: true },
          y: { display: true },
        },
        plugins: {
          legend: { position: "bottom" },
        },
      },
    });
    return () => chart.destroy();
  });

  // Reacts to prop changes (svelte v4)
  $: if (chart) {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.data.datasets[0].label = label;
    chart.data.datasets[0].borderColor = borderColor;
    chart.update();
  }
</script>

<div class="chart-container">
  <canvas bind:this={canvasEl}></canvas>
</div>

<style>
  .chart-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
