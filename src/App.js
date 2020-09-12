import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Checkout from "./views/Checkout";

import Header from "./components/Header";

import "./App.css";
import Login from "./views/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
