import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, Signup } from './components/AuthForm';
import { me } from './store/user';
import SideMenu from './components/SideMenu';
import Overview from './components/Overview';
import PortfolioContainer from './components/PortfolioContainer';
import Analysis from './components/Analysis';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Settings from './components/Settings';


class App extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="home">
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {isLoggedIn && (
            <React.Fragment>
              {/* Routes placed here are only available after logging in */}
              <SideMenu />
              <Switch>
                <Route path="/overview" component={Overview} />
                <Route path="/portfolio" component={PortfolioContainer} />
                <Route path="/analysis" component={Analysis} />
                <Route path="/messages" component={Messages} />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
              </Switch>
            </React.Fragment>
          )}
          {/* Displays our Login component as a fallback */}
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter((connect(mapState, mapDispatch))(App));

/**
 * PROP TYPES
 */
App.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
