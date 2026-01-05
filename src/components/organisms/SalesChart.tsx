"use client";

import { SalesData } from "@/lib/data";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    ReferenceLine
} from "recharts";

interface SalesChartProps {
    data: SalesData[];
    type: "bar" | "line" | "pie";
    threshold: number;
}

const COLORS = ["#4f46e5", "#0ea5e9", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export function SalesChart({ data, type, threshold }: SalesChartProps) {
    // Filter highlight logic could be done here, or just visual cues
    // For bar/line, we can add ReferenceLine

    if (type === "pie") {
        return (
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }: any) => `${name ?? ''} ${((percent ?? 0) * 100).toFixed(0)}%`}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="sales"
                        nameKey="month"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value: any) => [`$${value?.toLocaleString()}`, "Sales"]}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        );
    }

    if (type === "line") {
        return (
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E4E7" />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#71717A', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#71717A', fontSize: 12 }}
                        tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <Tooltip
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        formatter={(value: any) => [`$${value?.toLocaleString()}`, "Sales"]}
                    />
                    <Legend />
                    <ReferenceLine y={threshold} label="Target" stroke="#EF4444" strokeDasharray="3 3" />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#4F46E5"
                        strokeWidth={3}
                        dot={{ r: 4, fill: "#4F46E5", strokeWidth: 2, stroke: "#fff" }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        );
    }

    // Default Bar
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E4E7" />
                <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#71717A', fontSize: 12 }}
                    dy={10}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#71717A', fontSize: 12 }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                    cursor={{ fill: '#F4F4F5' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: any) => [`$${value?.toLocaleString()}`, "Sales"]}
                />
                <Legend />
                <ReferenceLine y={threshold} label="Target" stroke="#EF4444" strokeDasharray="3 3" />
                <Bar dataKey="sales" fill="#4F46E5" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.sales >= threshold ? "#4F46E5" : "#A5B4FC"}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}
