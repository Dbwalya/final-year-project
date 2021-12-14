import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase.js";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //succesfully created a user with an email and passowrd.
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-top">
        <Link path to="/login">
          <img
            className="login-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/2/23/ShopBox_logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button type="submit" onClick={signIn} className="signin-btn">
          Sign In
        </button>
        <p>
          By signing in, you agree to Shop Box's conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>

        <button className="signup-btn" onClick={register}>
          Create your Shop Box Account
        </button>
      </div>
    </div>
  );
}

export default Login;
