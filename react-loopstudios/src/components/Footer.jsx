import React from "react";
import logo from "../images/logo.svg";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <div className="logo-footer">
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
      </div>
      <div>
        <ul className="social">
          <li className="social-icon">
            <GrFacebook />
          </li>
          <li className="social-icon">
            <FaTwitter />
          </li>
          <li className="social-icon">
            <FaPinterest />
          </li>
          <li className="social-icon">
            <FaInstagram />
          </li>
        </ul>
        <div>
          <p className="footer-note">
            {" "}
            ©{currentYear} Loopstudios all rights reserved
          </p>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
