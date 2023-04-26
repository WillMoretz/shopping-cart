import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/dune.svg";

function Header() {
  return (
    <header>
      <Link to="/" className="brand">
        <img src={logo} alt="link to home page" className="logo" />
        <h1>Sahara</h1>
      </Link>
      <nav>
        <ul className="header-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button type="button" id="cart-button">
        Cart
      </button>
    </header>
  );
}

export default Header;
