import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SideMenu from './SideMenu';
import PortfolioContainer from './PortfolioContainer';
import User from './User';
import Settings from './Settings';

const styles = () => ({
  root: {
    display: 'flex',
  },
});

const App = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <SideMenu />
      <main>
        <Switch>
          <Route path="/portfolio" component={PortfolioContainer} />
          <Route path="/user" component={User} />
          <Route path="/settings" component={Settings} />
          <Redirect to="/user" />
        </Switch>
      </main>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(App);
