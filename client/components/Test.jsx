import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, SignUp } from './AuthForm';

const App = () => {
  return (
    <div >
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;

