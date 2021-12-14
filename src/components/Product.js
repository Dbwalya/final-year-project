import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{truncate(title, 48)}</p>
        <p className="product-price">
          <small>K</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product-image" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
