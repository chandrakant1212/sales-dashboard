import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Select } from "../atoms/Select";
import { BarChart3, LineChart, PieChart } from "lucide-react";

interface ChartFilterProps {
    year: number;
    onYearChange: (year: number) => void;
    chartType: "bar" | "line" | "pie";
    onChartTypeChange: (type: "bar" | "line" | "pie") => void;
    threshold: number;
    onThresholdChange: (val: number) => void;
}

export function ChartFilter({
    year,
    onYearChange,
    chartType,
    onChartTypeChange,
    threshold,
    onThresholdChange
}: ChartFilterProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-end md:items-center bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-zinc-100 dark:border-zinc-800/50">
            <Select
                label="Year"
                value={year}
                onChange={(e) => onYearChange(Number(e.target.value))}
                options={[
                    { label: "2024", value: 2024 },
                    { label: "2023", value: 2023 },
                    { label: "2022", value: 2022 },
                ]}
            />

            <Input
                label="Sales Threshold"
                type="number"
                value={threshold}
                onChange={(e) => onThresholdChange(Number(e.target.value))}
                className="w-full md:w-32"
            />

            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">View</label>
                <div className="flex bg-zinc-200 dark:bg-zinc-700 rounded-md p-1 gap-1">
                    <Button
                        type="button"
                        variant={chartType === "bar" ? "primary" : "ghost"}
                        size="sm"
                        onClick={() => onChartTypeChange("bar")}
                        className={chartType !== "bar" ? "bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-600" : ""}
                        title="Bar Chart"
                    >
                        <BarChart3 className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={chartType === "line" ? "primary" : "ghost"}
                        size="sm"
                        onClick={() => onChartTypeChange("line")}
                        className={chartType !== "line" ? "bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-600" : ""}
                        title="Line Chart"
                    >
                        <LineChart className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={chartType === "pie" ? "primary" : "ghost"}
                        size="sm"
                        onClick={() => onChartTypeChange("pie")}
                        className={chartType !== "pie" ? "bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-600" : ""}
                        title="Pie Chart"
                    >
                        <PieChart className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
