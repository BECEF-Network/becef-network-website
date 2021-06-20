import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// Import Fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false);

  const toggleClick = () => {
    setToggle(!toggle);
    setNav(!nav);
  };

  const [search, setSearch] = useState(false);

  const searchClick = () => {
    setSearch(!search);
    // setNav(!nav);
  };

  let day = new Date().toDateString();
  const [nDay, setNDay] = useState(day);

  let time = new Date().toTimeString();
  const [nTime, setNTime] = useState(time);

  const cTime = () => {
    time = setNTime(new Date().toLocaleTimeString());
  };
  setInterval(cTime, 1000);

  return (
    <header>
      <div className="container">
        <div className="nav-top">
          <div className="nav-top-icon">
            <a href="" className="nav-lang-btn">
              বাংলা
            </a>
            <div
              onClick={toggleClick}
              className={toggle ? "toggle active" : "toggle"}
            ></div>
            <FontAwesomeIcon
              onClick={searchClick}
              className="search"
              icon={faSearch}
            />
            <form
              className={search ? "active search-field" : "search-field"}
              action="#"
            >
              <input type="text" placeholder="Type to search..." required />
              <button type="submit">
                <FontAwesomeIcon className="search" icon={faArrowRight} />
              </button>
            </form>
          </div>
          <div className="nav-top-date">
            <p>
              {nDay} | {nTime}
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
              <Link to="/">Home</Link>
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
              <Link to="/community">community</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
