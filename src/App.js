import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Header from "./components/Header";
import firebaseSetup from "./firebase";

import "./App.css";

function App() {
  useEffect(() => {
    const msg = firebaseSetup.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        console.warn("token", data);
      });
  }, []);
  return (
    <Router>
      <div>
        <Header></Header>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
