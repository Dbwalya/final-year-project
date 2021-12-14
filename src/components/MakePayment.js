import React, { useState } from "react";
import "./MakePayment.css";
import { CardElement } from "@stripe/react-stripe-js";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import axios from "axios";
const MakePayment = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  //Field States

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [email, setEmail] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    console.log("click");

    const response = await axios.post(
      "https://depatment-management-system.herokuapp.com/api/v1/payment-stripe",
      paymentForm
    );
    if (response.data.success === true) {
      history.push("/success");
    } else if (response.data.success === false) {
      alert(response.data.errors);
    }
    // console.log(response.data.errors);
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
    setCardNumber(event.target.value);
  };
  console.log(getBasketTotal(basket));
  const paymentForm = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    country: country,
    city: city,
    shippingAddress: shippingAddress,
    expMonth: expMonth,
    expYear: expYear,
    cvc: cvc,
    cardNumber: cardNumber,
    totalAmount: getBasketTotal(basket),
  };
  return (
    <div className="make-payment">
      <form onSubmit={handleSubmit}>
        <h1 className="checkout_title">Checkout</h1>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Shipping Address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expiry Month"
          value={expMonth}
          onChange={(e) => setExpMonth(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expiry Year"
          value={expYear}
          onChange={(e) => setExpYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />

        {/* <Link to="/success"> */}
        <button onClick={handleSubmit}>
          <span>Buy Now</span>
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default MakePayment;
