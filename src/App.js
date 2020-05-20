import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import 'antd/dist/antd.css';
import './App.css';
import Account from './pages/Account';



function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/account/password' component={Account} />
          <Route path='/account/login' component={Account} />
          <Route path='/account/signup' component={Account} />
        </Switch>
    </Router>

  );
}

export default App;
