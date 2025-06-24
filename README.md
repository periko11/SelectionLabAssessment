# Weather Visualization Dashboard

A responsive frontend application built with **Svelte**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Chart.js**. This dashboard fetches and visualizes real-time weather data using the [Open-Meteo public API](https://open-meteo.com/en/docs).

## Live Demo

Check out the live demo here: [GitHub Repository](https://github.com/periko11/SelectionLabAssessment)

## Purpose

This project was built as part of a frontend assessment to demonstrate skills in modern frontend development, data visualization, and API integration.

## Features

- **Real-time Weather Data:** Live data visualization of temperature, wind speed, rain, and more.
- **Dynamic Charting:** Interactive graphs generated with Chart.js.
- **Responsive UI:** Tailored for multiple devices using Tailwind CSS.
- **Type-safe Development:** Robust TypeScript implementation ensuring reliable data handling.
- **Efficient Tooling:** Optimized development experience with Vite.

## Technologies Used

- [Svelte](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [Prettier](https://prettier.io/)

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) package manager

## Installation

Clone the repository:

```bash
git clone https://github.com/periko11/SelectionLabAssessment.git
cd SelectionLabAssessment
```

Install dependencies:

```bash
pnpm install
```

## Development

Start the development server:

```bash
pnpm dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

## Production Build

Create a production-ready build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Formatting and Type-checking

Format code with Prettier:

```bash
pnpm format
```

Perform type checks:

```bash
pnpm check
```

## VS Code Recommendations

Recommended extension:

- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=1YiB.svelte-bundle)

_(Note: I personally used [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), and [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) extensions as well.)_

## Known Issues

- Regardless of the selected category, if you choose **180m height** and a forecast length **longer than 7 days**, the graph line will stop after 7 days. This is due to API limitations — values beyond this point will be filled with `null`.

## API Reference

- [Open-Meteo Weather API Documentation](https://open-meteo.com/en/docs)

## Author

- GitHub: [periko11](https://github.com/periko11)

## License

This project is licensed under the MIT License.
