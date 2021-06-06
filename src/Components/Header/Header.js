import React, { useState } from "react";
import "./Header.css";
import {Link} from 'react-router-dom';

// Import Fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false);

  const toggleClick = () => {
    setToggle(!toggle);
    setNav(!nav);
  };

  let day = new Date().toDateString();
  const [nDay, setNDay] = useState(day);

  let time = new Date().toLocaleTimeString();
  const [nDate, setNDate] = useState(time);

  const date = () => {
    time = setNDate(new Date().toLocaleTimeString());
  };
  setInterval(date, 1000);

  return (
    <header>
      <div className="container">
        <div className="nav-top">
          <div className="nav-top-icon">
            {/* <FontAwesomeIcon className="toggle" icon={faBars} /> */}
            <div
              onClick={toggleClick}
              className={toggle ? "toggle active" : "toggle"}
            ></div>
            <FontAwesomeIcon className="search" icon={faSearch} />
          </div>
          <div className="nav-top-date">
            <p>
              {day} | {nDate}{" "}
            </p>
          </div>

          {/* mobile logo start */}
          <img src="images/logo-1.png" className="mbl-logo" alt="LOGO" />
          {/* mobile logo end */}

          <div className="nav-top-login">
            <FontAwesomeIcon className="nav-bell-icon" icon={faBell} />
            <a href="/" className="nav-login-btn">
              LOGIN
            </a>
          </div>
        </div>

        <div className="nav-middle">
          <img src="images/logo-1.png" className="logo" alt="LOGO" />
        </div>

        <div className="nav-bottom">
          <ul className={nav ? "active" : ""}>
            <li>
              <a>
                <Link to="/">
                  Home
                </Link>
                </a>
            </li>
            <li>
              <a href="/">Article</a>
            </li>
            <li>
              <a href="/">literature</a>
            </li>
            <li>
              <a href="/">videos</a>
            </li>
            <li>
              <a href="/">news</a>
            </li>
            <li>
              <a href="/">community</a>
            </li>
            <li>
              <a href="/">
                <Link to='/about'>
                  about
                </Link>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
