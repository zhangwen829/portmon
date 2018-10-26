import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
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

const Home = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <SideMenu />
      <main>
        <Switch>
          <Route path="/portfolio" component={PortfolioContainer} />
          <Route path="/user" component={User} />
          <Route path="/settings" component={Settings} />
          <Redirect to="/portfolio" />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(withStyles(styles, { withTheme: true })(Home));
