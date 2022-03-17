import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Upload from './components/Upload';
import Admin from './components/Admin';
import Logout from './components/Logout';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Upload />
      </Route>
      <Route path='/logout'>
        <Logout />
      </Route>
      <Route path='/admin'>
        <Admin />
      </Route>
    </Switch>
  );
}

export default App;
