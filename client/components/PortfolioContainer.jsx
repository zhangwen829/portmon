import React from 'react';
import { MonitorTable, PortfolioSelector } from '../components';


class PortfolioContainer extends React.Component {
  state = {
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'flex-start',
  };
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
