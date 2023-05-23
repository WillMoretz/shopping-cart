import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/dune.svg";

function Header() {
  const [navIsHidden, setNavIsHidden] = useState(true);

  function toggleHeaderLinks(allowedToOpen) {
    if (navIsHidden) {
      if (allowedToOpen) setNavIsHidden(false);
    } else setNavIsHidden(true);
  }

  return (
    <header>
      <div className="header-top">
        <Link to="/" className="brand" onClick={() => toggleHeaderLinks(false)}>
          <img src={logo} alt="link to home page" className="logo" />
          <h1>Sahara</h1>
        </Link>
      </div>
      <nav>
        <ul className={`header-links ${navIsHidden ? "hidden" : "shown"}`}>
          <li>
            <Link to="/" onClick={() => toggleHeaderLinks(true)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => toggleHeaderLinks(true)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => toggleHeaderLinks(true)}>
              Contact
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="header-links-toggle"
          onClick={() => toggleHeaderLinks(true)}
        >
          {navIsHidden ? "☰" : "X"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
