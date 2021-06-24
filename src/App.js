import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Logout from "./components/Logout";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  );
}

export default App;
