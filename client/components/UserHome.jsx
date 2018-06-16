import React from 'react';
import {PortfolioContainer, SideMenu} from '../components';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

const UserHome = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <SideMenu />
      <PortfolioContainer />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(UserHome);

