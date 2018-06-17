import React from 'react';
import PortfolioContainer from './PortfolioContainer';
import User from './User';
import Settings from './Settings';
import SideMenu from './SideMenu';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch, Redirect } from 'react-router-dom';

const styles = theme => ({
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
          <Route path="/user" component={User} />
          <Route path="/portfolio" component={PortfolioContainer} />
          <Route path="/settings" component={Settings} />
          <Redirect to="/user" />
        </Switch>
      </main>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(App);

