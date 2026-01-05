"use client";

import { useState } from "react";
import { getSalesByYear } from "@/lib/data";
import { ChartFilter } from "../molecules/ChartFilter";
import { SalesChart } from "../organisms/SalesChart";
import { StatsOverview } from "../organisms/StatsOverview";
import { LayoutDashboard } from "lucide-react";

export function DashboardTemplate() {
    const [year, setYear] = useState<number>(2024);
    const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
    const [threshold, setThreshold] = useState<number>(20000);

    const salesData = getSalesByYear(year);

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 p-6 md:p-12 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
                            <LayoutDashboard className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Sales Overview</h1>
                            <p className="text-zinc-500 dark:text-zinc-400">Monitor your key performance metrics</p>
                        </div>
                    </div>
                </header>

                {/* Controls */}
                <section>
                    <ChartFilter
                        year={year}
                        onYearChange={setYear}
                        chartType={chartType}
                        onChartTypeChange={setChartType}
                        threshold={threshold}
                        onThresholdChange={setThreshold}
                    />
                </section>

                {/* Stats */}
                <StatsOverview data={salesData} />

                {/* Main Chart */}
                <section className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 overflow-hidden">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">Monthly Performance</h2>
                        <p className="text-sm text-zinc-500">Sales breakdown for {year}</p>
                    </div>

                    <div className="w-full h-[450px]">
                        <SalesChart
                            data={salesData}
                            type={chartType}
                            threshold={threshold}
                        />
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center text-sm text-zinc-400 pt-12">
                    <p>© {new Date().getFullYear()} Sales Dashboard. Built with Next.js 15 & Atomic Design.</p>
                </footer>

            </div>
        </div>
    );
}
