import {withStyles} from '@material-ui/core/styles';
import React from 'react';
import {PortfolioSelector} from '../components';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

const PortfolioContainer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <PortfolioSelector />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(PortfolioContainer);
