# Uptime AI Dashboard

A clean, production-ready React dashboard built with Vite. This project demonstrates a fully client-side reporting dashboard with dynamic charts, searchable report listings, and persistent state — all without a backend.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone <repository-url>
cd dashboard-report-ui
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application runs at:

```
http://localhost:5173
```

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI Library |
| **Vite** | Build tool (fast!) |
| **Tailwind CSS** | Styling |
| **Chart.js** | Charts (via react-chartjs-2) |
| **Lucide React** | Icons |
| **LocalStorage** | Data persistence |

---

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

---

## Features

- 📊 Dashboard with metric cards
- 📈 Bar & Donut charts
- 🔍 Search & filter reports
- 📄 Pagination (12 items per page)
- ➕ Add new reports modal with validation
- 💾 LocalStorage persistence
- 🔄 Dynamic dashboard updates on report selection

---

## Assignment Requirement Coverage

| Requirement | Status |
|-------------|--------|
| React-based implementation | ✔ |
| Chart.js integration | ✔ |
| Report list with search | ✔ |
| Pagination (12 items per page) | ✔ |
| Dynamic dashboard updates on selection | ✔ |
| Add report modal with validation | ✔ |
| localStorage persistence | ✔ |
| Clean component structure | ✔ |
| No backend integration | ✔ |

---

## Design & Technical Decisions

- **Vite over CRA** — chosen for significantly faster builds and modern tooling support.
- **Client-side pagination** — implemented for simplicity since all data is mocked locally.
- **Custom hooks** — used to cleanly separate state logic from presentation components.
- **Tailwind CSS** — ensures consistent spacing, responsiveness, and long-term maintainability.
- **No external state libraries** — avoided unnecessary complexity; React's built-in state is sufficient for this scope.

---

## Assumptions

1. All report data is mocked for demonstration purposes.
2. Data structure is realistic but not connected to any backend or API.
3. The application is fully client-side, as per assignment instructions.

---

## No Backend Required

All data is stored in browser `localStorage`. No server, database, or API calls are needed to run this project.

---

## Final Notes

This project focuses on:

- Clean UI implementation
- Clear component structure
- Functional state management
- Practical frontend architecture

Thank you for reviewing this submission.
