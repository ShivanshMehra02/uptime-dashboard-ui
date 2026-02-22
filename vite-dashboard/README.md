# Uptime AI Dashboard

A clean, production-ready React dashboard built with Vite.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool (fast!)
- **Tailwind CSS** - Styling
- **Chart.js** - Charts (via react-chartjs-2)
- **Lucide React** - Icons
- **LocalStorage** - Data persistence

## Project Structure

```
src/
├── data/
│   └── mockData.js      # Sample data & localStorage helpers
├── hooks/
│   └── useReports.js    # State management hook
├── App.jsx              # Main app (all components)
├── main.jsx             # Entry point
└── index.css            # Styles
```

## Features

- 📊 Dashboard with metric cards
- 📈 Bar & Donut charts
- 🔍 Search & filter reports
- 📄 Pagination (12 per page)
- ➕ Add new reports modal
- 💾 LocalStorage persistence

## No Backend Required

All data is stored in browser localStorage.
