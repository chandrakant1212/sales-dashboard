# 📊 Sales Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-3.6-22b5bf?style=for-the-badge)](https://recharts.org/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

A modern, high-performance sales analytics dashboard built with **Next.js 15**, **TypeScript**, and **Atomic Design** principles. This project demonstrates responsive data visualization using Recharts and a clean, modular component architecture.

🚀 **Live Demo:** [View Dashboard](https://sales-dashboard-axudkww6i-chandrakant1212s-projects.vercel.app/)

---

## ✨ Features

- **📈 Dynamic Data Visualization**:
  - **Bar Charts**: Compare monthly performance.
  - **Line Charts**: Analyze trends over time.
  - **Pie Charts**: Visualize market share distribution.
  
- **🎛️ Interactive Controls**:
  - **Year Filter**: Seamlessly switch data between 2022, 2023, and 2024.
  - **Chart Switching**: Toggle chart types instantly without reloading.
  - **Target Threshold**: Set custom sales goals with visual indicators.

- **🎨 UI/UX Excellence**:
  - **Atomic Design**: Modular component structure (Atoms, Molecules, Organisms).
  - **Responsive Layout**: Optimized for Desktop and Mobile.
  - **Dark Mode**: Fully supported system-aware dark theme.
  - **Server-Side Rendering**: Optimized with Next.js App Router.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

## 📂 Project Structure (Atomic Design)

This project follows the **Atomic Design** methodology for scalability and maintainability:

```bash
src/
├── components/
│   ├── atoms/       # Basic building blocks (Buttons, Inputs, Cards)
│   ├── molecules/   # Simple groupings (ChartFilter)
│   ├── organisms/   # Complex sections (SalesChart, StatsOverview)
│   └── templates/   # Page layouts (DashboardTemplate)
├── lib/
│   ├── data.ts      # Deterministic mock data generation
│   └── utils.ts     # Tailwind class merging
└── app/             # Next.js App Router pages
```

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/chandrakant1212/sales-dashboard.git
    cd sales-dashboard
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run development server**:
    ```bash
    npm run dev
    ```

4.  **Open in browser**:
    Navigate to [http://localhost:3000](http://localhost:3000).

---

Made with ❤️ by Chandrakant
