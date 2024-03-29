import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import PaymentSection from "./components/PaymentSection";
import Laptop from "./components/Laptop";
import Game from "./components/Game";
import Fashion from "./components/Fashion";
import Television from "./components/Television";
import Shoes from "./components/Shoes";
import MensClothing from "./components/MensClothing";
import ContactUs from "./components/ContactUs";
import { auth } from "./firebase";
// import { Header, Home, Checkout, Login, Payment, Laptop } from 'components';
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SliderData } from "./components/SliderData";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
import Success from "./components/Success";

const promise = loadStripe(
  "pk_test_51JL4BdHnaQEJmDiPT35aZV6bkF1Pwh85VtHj14f0LbxGDjX1JwwITvE2dVcqzTRNVoEYirSpSzU4r52lXGdj4bXJ00HXDUckIF"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>", authUser);

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
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/mensclothing">
              <Header />
              <MensClothing />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
            <Route path="/contactus">
              <Header />
              <ContactUs />
            </Route>
            <Route path="/games">
              <Header />
              <Game />
            </Route>
            <Route path="/fashion">
              <Header />
              <Fashion />
            </Route>
            <Route path="/shoes">
              <Header />
              <Shoes />
            </Route>
            <Route path="/television">
              <Header />
              <Television />
            </Route>
            <Route path="/laptop">
              <Header />
              <Laptop />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/paymentsection">
              <Header />
              <Elements stripe={promise}>
                <PaymentSection />
              </Elements>
            </Route>
            <Route path="/">
              <Header />
              <Home slides={SliderData} />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
