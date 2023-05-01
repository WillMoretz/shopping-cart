import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/dune.svg";

function Header() {
  function toggleHeaderLinks() {
    const headerLinks = document.querySelector(".header-links");
    if (headerLinks.classList.contains("hidden")) {
      headerLinks.classList.add("shown");
      headerLinks.classList.remove("hidden");
    } else {
      headerLinks.classList.remove("shown");
      headerLinks.classList.add("hidden");
    }
  }

  return (
    <header>
      <div className="header-top">
        <Link to="/" className="brand">
          <img src={logo} alt="link to home page" className="logo" />
          <h1>Sahara</h1>
        </Link>
        <button
          type="button"
          className="header-links-toggle"
          onClick={() => toggleHeaderLinks()}
        >
          Links
        </button>
      </div>
      <nav>
        <ul className="header-links">
          <div className="line-break" aria-hidden="true" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <div className="line-break" aria-hidden="true" />
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <div className="line-break" aria-hidden="true" />
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <div className="line-break" aria-hidden="true" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
