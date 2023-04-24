import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
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
      <div>Cart</div>
    </header>
  );
}

export default Header;
