import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/dune.svg";

function Home() {
  return (
    <section className="homepage">
      <h2>Sahara</h2>
      <p>Welcome to Sahara. Its like Amazon, but way more barren</p>
      <Link to="/shop">Shop Now</Link>
      <img src={logo} alt="a sand dune, the sahara shop logo" />
    </section>
  );
}

export default Home;
