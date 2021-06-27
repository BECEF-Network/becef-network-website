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
  const [nDay] = useState(day);

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
            <Link to="/lang/bn" className="nav-lang-btn">
              বাংলা
            </Link>
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
            <Link to="/login" className="nav-login-btn">
              LOGIN
            </Link>
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
              <Link to="/article">Article</Link>
            </li>
            <li>
              <Link to="/literature">Literature</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
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
