import React from 'react';
import MonitorTable from './MonitorTable';
import PortfolioSelector from './PortfolioSelector';


class PortfolioContainer extends React.Component {
  render() {
    return (
      <div>
        <PortfolioSelector />
        <MonitorTable />
      </div>
    );
  }
}

export default PortfolioContainer;
