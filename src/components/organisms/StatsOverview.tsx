import { Card } from "../atoms/Card";
import { DollarSign, TrendingUp, TrendingDown, Activity } from "lucide-react";
import { SalesData } from "@/lib/data";

interface StatsOverviewProps {
    data: SalesData[];
}

export function StatsOverview({ data }: StatsOverviewProps) {
    const totalSales = data.reduce((acc, curr) => acc + curr.sales, 0);
    const averageSales = totalSales / data.length;
    // Mock growth logic
    const growth = "+12.5%";
    const isPositive = true;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card title="Total Revenue" icon={DollarSign}>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">${totalSales.toLocaleString()}</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-medium">
                        +4.5%
                    </span>
                </div>
            </Card>

            <Card title="Average Monthly" icon={Activity}>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">${Math.round(averageSales).toLocaleString()}</span>
                </div>
            </Card>

            <Card title="Yearly Growth" icon={isPositive ? TrendingUp : TrendingDown}>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{growth}</span>
                    <span className="text-sm text-zinc-500">vs. last year</span>
                </div>
            </Card>
        </div>
    );
}
