import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
    setTimeout(() => {
      setMessage(
        "Feedback has successfully been sent. Thank you for choosing Shop Box"
      );
    }, 2400);
  };
  return (
    <div className="contact-us">
      <div className="contact-us-header">
        <h2>
          Having problems with a product from the{" "}
          <span className="contact-us-shopbox">Shop Box</span> Store?
        </h2>
        <h4>Simply reach out to us in the section below</h4>
      </div>
      <div className="contact-us-body">
        <form>
          <h4>
            Fill out the form below by specifying the product information.
          </h4>
          <input
            // value={input}
            //   onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter Product ID"
          />
          <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter Product Name"
          />
          <h4>Please clarify problems faced with the product</h4>
          <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter problem faced..."
          />
          <h4>Upload product image here</h4>
          <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            type="file"
            placeholder="Fetch product"
          />
          <button type="submit" onClick={sendMessage}>
            Submit
          </button>
          <span>{message}</span>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
