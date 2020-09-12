import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Checkout from "./views/Checkout";

import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
