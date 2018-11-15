import React from 'react';
import { Bar } from 'react-chartjs';


const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: "Previous Year",
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40, 32, 48, 63, 74, 88]
    },
    {
      label: "Current Year",
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90, 74, 83, 77, 83, 97]
    }
  ]
};


const chartOptions = {

  scaleBeginAtZero: true,

  scaleShowGridLines: true,

  scaleGridLineColor: "rgba(0,0,0,.05)",

  scaleGridLineWidth: 1,

  scaleShowHorizontalLines: true,

  scaleShowVerticalLines: true,

  barShowStroke: true,

  barStrokeWidth: 2,

  barValueSpacing: 5,

  barDatasetSpacing: 1,
};


const BarChart = () => {
  return (
    <Bar data={chartData} options={chartOptions} width="800" height="500" />
  );
};

export default BarChart;
