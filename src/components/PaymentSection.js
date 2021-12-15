import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "../reducer";
import "./Payment.css";
import MakePayment from "./MakePayment";

const PaymentSection = () => {
  const [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment-top">
        <h4>{user?.email}</h4>
        <h2>Your Orders</h2>
      </div>
      <div className="payment-bottom">
        <div className="payment-left">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              price={item.price}
              rating={item.rating}
              className="payment-product"
            />
          ))}
        </div>
        <div className="payment-section">
          <MakePayment />
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
