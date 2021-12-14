import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import "./Header.css";

function Header() {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/2/23/ShopBox_logo.png"
          alt="Commerce"
        />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-optionLineOne">
              {user ? `Hello ${user?.email}` : "Hello Guest"}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-optionLineOne">Return</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/contactus">
          <div className="header-helpOption">
            <span className="header-optionLineOne">Contact</span>
            <span className="header-optionLineOTwo">Us</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
