export interface SalesData {
    month: string;
    sales: number;
    year: number;
    [key: string]: string | number;
}

const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const generateSales = (year: number): SalesData[] => {
    return MONTHS.map((month, index) => {
        // Deterministic pseudo-random generation to prevent hydration mismatches
        const base = (year * 100) + (index * 555);
        const val = Math.abs(Math.sin(base) * 10000) + 15000;
        return {
            month,
            year,
            sales: Math.floor(val),
        };
    });
};

export const MOCK_DATA: SalesData[] = [
    ...generateSales(2022),
    ...generateSales(2023),
    ...generateSales(2024),
];

export const getSalesByYear = (year: number) => {
    return MOCK_DATA.filter((d) => d.year === year);
};
