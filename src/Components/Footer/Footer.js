import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top row">
          <h1 className="footer-logo col-md-6 ">
            <a href="/">LOGO</a>
          </h1>

          {/* Newsletter Form  */}

          <form className="footer-form col-md-6 text-right">
            <div className="input-email">
              <input type="text" placeholder="Enter Your Email" />
              <div className="email-icon">
                <FontAwesomeIcon
                  className="footer-email-icon"
                  icon={faEnvelope}
                />
              </div>
            </div>
            <input type="submit" value="Subscribe" />
          </form>
        </div>

        <hr />

        <div className="footer-middle row">
          <div className="col-lg-4 col-md-6 my-md-0 my-3 footer-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 my-md-0 my-3 trending-topics">
            <div className="title">
              <h4>Trending Topics</h4>
            </div>
            <ul>
              <li>
                <Link to="/">Science</Link>
              </li>
              <li>
                <Link to="/">Tech</Link>
              </li>
              <li>
                <Link to="/">Apps</Link>
              </li>
              <li>
                <Link to="/">Cars</Link>
              </li>
              <li>
                <Link to="/">Reviews</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 my-md-0 my-3 important-link">
            <div className="title">
              <h4>Important Links</h4>
            </div>
            <ul>
              <li>
                <a href="/">Community Guidelines</a>
              </li>
              <li>
                <a href="/">Communications Preferences</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms of Use</a>
              </li>
              <li>
                <a href="/">Contribute</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-center">© Copyright 2021, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
