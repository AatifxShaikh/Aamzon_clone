// import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import React ,{ useEffect, useState } from "react";
import Checkout from "./Checkout";
import Orders from "./Orders";
import Payment from "./Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import form from "./form";
import 'bootstrap/dist/css/bootstrap.css'

const promise = loadStripe(
  "pk_test_51M56JISDKMYMzkUAWG3FbDuDJ27tDXUb8Z2hOxK88i8NhE396HdxapWeyWeTHXSHZv1VWpVGUsMGiaEYmRfL7oWf001frieomI"
);

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
return (
  <div className="app">
    <Router>
      <Switch>
        
        <Route path="/login">
          <Login />
          </Route>
        <Route path="/Orders">
          <Orders />
          </Route>
           
          
 <Route path="/Checkout">
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
    </Router>
  </div>
);
}

export default App;