# Next.js 15 Sales Dashboard

A modern, responsive sales dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Recharts, following Atomic Design principles.

## Features
- 📊 **Dynamic Charts**: Switch between Bar, Line, and Pie charts.
- 📅 **Year Filtering**: View sales data for different years.
- 🎯 **Threshold Setting**: Interactive sales target line.
- 🎨 **Atomic Design**: structured codebase (Atoms, Molecules, Organisms).
- 🌓 **Dark Mode**: Support for light and dark themes.

## Recent Updates
- **Hydration Fix**: Implemented deterministic mock data generation to resolve server-client mismatches.
- **Type Safety**: Enhanced TypeScript definitions for Recharts compatibility.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS, clsx, tailwind-merge
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open the dashboard**:
   Navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure
```
src/
├── components/
│   ├── atoms/       # Base UI components (Button, Card, Input)
│   ├── molecules/   # Compound components (ChartFilter)
│   ├── organisms/   # Complex sections (SalesChart, StatsOverview)
│   └── templates/   # Page layouts (DashboardTemplate)
├── lib/
│   ├── data.ts      # Mock data service
│   └── utils.ts     # Helper functions
└── app/             # Application routes
```

## Deployment
### Deploy on Vercel
1. Push this code to your GitHub repository: [https://github.com/chandrakant1212/sales-dashboard](https://github.com/chandrakant1212/sales-dashboard)
2. Log in to [Vercel](https://vercel.com).
3. Click "New Project" and select your repository `sales-dashboard`.
4. Click "Deploy". Vercel will automatically detect the Next.js configuration.
