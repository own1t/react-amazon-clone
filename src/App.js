import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";

import Home from "./views/Home";
import Checkout from "./views/Checkout";
import Login from "./views/Login";

import Header from "./components/Header";

import "./App.css";
import Payment from "./views/Payment";

const promise = loadStripe(
  "pk_test_51HQfDYGvGTXqbPTw1X0vtPGJF55SDqQAn74tquk6VkwvdrLOTO7w4nCW7U8jXoLCulRlTDqvgFMSwLQrOhi9L487008NjyruDH"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
