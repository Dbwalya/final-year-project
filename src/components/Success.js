import React from "react";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Success.css";
const Success = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="success">
      <div className="success__top">
        <div className="success__paymentSuccess">
          <span>
            Your payment was processed successfully, <h3>{user?.email}</h3>
            Thank you for choosing <h3>Shop Box</h3>
          </span>
        </div>
        <div className="success__topRight">
          <span>
            Order Total:
            <h2>{`ZMK ${getBasketTotal(basket)}`}</h2>
          </span>
          <span>
            Number of Products: <h2>{basket.length}</h2>
          </span>
        </div>
      </div>
      <div className="success__bottom">
        <div className="success__orderSummery">
          <h2>Order Summery</h2>
          {basket.map((basketItem) => (
            <img
              src={basketItem.image}
              alt={basketItem.title}
              className="success__image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Success;
