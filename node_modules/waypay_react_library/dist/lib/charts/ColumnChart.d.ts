import React from 'react';
interface BarData {
    name: string;
    value: number;
    color: string;
}
interface ChartData {
    label: string;
    total: number;
    bars: BarData[];
}
interface ColumnChartProps {
    title: string;
    data: ChartData[];
    maxValue: number;
    step: number;
    height?: number | string;
    titleFontSize?: number | string;
}
declare const ColumnChart: React.FC<ColumnChartProps>;
export default ColumnChart;
