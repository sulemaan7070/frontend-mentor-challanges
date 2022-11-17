import React, { useState } from "react";
import logo from "../images/logo.svg";

function Header() {
  const [show, setShow] = useState(false);
  function showNav() {
    setShow((prevVal) => {
      console.log(prevVal);
      return !prevVal;
    });
  }
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Loopstudios" />
        </div>
        {/**mobile menu on click design */}
        <nav className={!show ? " hidden" : ""}>
          <div>
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <button>About</button>
            </li>

            <li>
              <button>Careers</button>
            </li>

            <li>
              <button>Events </button>
            </li>
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </nav>
        {/**desktop options */}
        <div className="desktop-options">
          <ul>
            <li>
              <button>About</button>
            </li>

            <li>
              <button>Careers</button>
            </li>

            <li>
              <button>Events </button>
            </li>
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </div>
        <div
          className={show ? "menu-btn rotate" : "menu-btn"}
          onClick={showNav}
        >
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
