import React from 'react';
interface PointData {
    x: number;
    y: number;
    color: string;
    label?: string;
    value?: number;
    name?: string;
}
interface ScatterPlotProps {
    title: string;
    data: PointData[];
    xAxisLabel: string;
    yAxisLabel: string;
    maxX: number;
    maxY: number;
    minY: number;
    xStep: number;
    yStep: number;
    height?: number | string;
    showLegend?: boolean;
    xAxisCustomLabels?: string[];
    showTooltip?: boolean;
    titleFontSize?: string;
}
declare const ScatterPlot: React.FC<ScatterPlotProps>;
export default ScatterPlot;
