import React from "react";
import twitterIcon from "../img/twitter-icon.svg";
import facebookIcon from "../img/facebook-icon.svg";
import instagramIcon from "../img/instagram-icon.svg";
import redditIcon from "../img/reddit-icon.svg";
import githubIcon from "../img/github-icon.svg";

function Contact() {
  return (
    <section>
      <h2>Contact Us!</h2>
      <ul>
        <li>
          <a href="https://github.com/WillMoretz/shopping-cart">
            <img
              src={githubIcon}
              alt="link to this project's github repository"
            />
          </a>
        </li>
        <li>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="link to twitter" />
          </a>
        </li>
        <li>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="link to facebook" />
          </a>
        </li>
        <li>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="link to instagram" />
          </a>
        </li>
        <li>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src={redditIcon} alt="link to reddit" />
          </a>
        </li>
      </ul>
      <p>1234 Tanglewood Road, Jackson, Mississippi</p>
      <p>123-456-7890</p>
    </section>
  );
}

export default Contact;
