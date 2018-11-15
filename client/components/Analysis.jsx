import React from 'react';
import PieChart from './PieChart';
import BarChart from './BarChart';


const Analysis = () => {
  return (
    <div className="chart-align right-body">
      <div>
        <PieChart />
        <h2>My Portfolio by Sector</h2>
        <h4>In Percentage</h4>
      </div>
      <div>
        <BarChart />
        <h2>Total Portfolio Value by Month</h2>
        <h4>US Dollars in Thousands，Previous Year vs Current Year</h4>
      </div>
    </div>
  );
};

export default Analysis;
