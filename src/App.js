// eslint-disable
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Translation from './Translation.js';
import Login from './Login.js';
import Main from './Main.js';
import Sg from './Sg';
import { BrowserRouter } from 'react-router-dom';
import PublicRoute from './function/PublicRoute';
import PrivateRoute from './function/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute  component={Main} exact path={'/'}/>
        <PublicRoute restricted component={Sg} exact path={'/sg'}/>
        <PublicRoute restricted component={Login} exact path={'/Login'}/>
        <PrivateRoute  component={Translation} exact path={'/Translation'}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
