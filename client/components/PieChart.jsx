import React from 'react';
import { Pie } from 'react-chartjs';

const chartData = [
  {
    value: 60,
    color: "#4b86b4",
    highlight: "#2a4d69",
    label: "Technology"
  },
  {
    value: 20,
    color: "#adcbe3",
    highlight: "#2a4d69",
    label: "Manufacturing"
  },
  {
    value: 10,
    color: "#e7eff6",
    highlight: "#2a4d69",
    label: "Financial Servies"
  },
  {
    value: 10,
    color: "#63ace5",
    highlight: "#2a4d69",
    label: "Health Care"
  }
];

const chartOptions =
{
  segmentShowStroke: true,

  segmentStrokeColor: "#fff",

  segmentStrokeWidth: 2,

  percentageInnerCutout: 0,

  animationSteps: 100,

  animationEasing: "easeOutBounce"

};


const PieChart = () => {
  return (
    <Pie data={chartData} options={chartOptions} width="500" height="500" />
  );
};

export default PieChart;
