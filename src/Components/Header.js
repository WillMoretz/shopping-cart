import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">Logo</Link>
      </div>
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
