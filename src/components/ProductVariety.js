import React from "react";
import "./ProductVariety.css";

const ProductVariety = ({ image, button }) => {
  return (
    <div className="product-variety">
      <div className="product-container">
        <img src={image} alt="Product Accessories" />
      </div>
      <button className="variety-button">{button}</button>
    </div>
  );
};
export default ProductVariety;
