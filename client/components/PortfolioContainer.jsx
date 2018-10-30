import React from 'react';
import MonitorTable from './MonitorTable';
import PortfolioSelector from './PortfolioSelector';


const PortfolioContainer = () => {
  return (
    <div>
      <PortfolioSelector />
      <MonitorTable />
    </div>
  );
};

export default PortfolioContainer;
