import "../styles/styles.css";
import logo from "../images/logo.svg";
import { useState } from "react";

function Header() {
  const [nav, SetNav] = useState(false);

  return (
    <div>
      {nav ? (
        <header className="header open">
          <div className="overlay has-fade fade-in"></div>
          <nav className="flex container conatiner--pall jc-sb ai-c">
            <a href="#" className="header_logo">
              <img src={logo}></img>
            </a>

            <a
              href="#"
              className="header_menu "
              id="hamburger"
              onClick={() => {
                SetNav(!nav);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </nav>

          <div className="nav_menu has-fade fade-in">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
        </header>
      ) : (
        <header className="header">
          <div className="overlay has-fade fade-out"></div>
          <nav className="flex container conatiner--pall jc-sb ai-c">
            <a href="#" className="header_logo">
              <img src={logo}></img>
            </a>

            <a
              href="#"
              className="header_menu "
              id="hamburger"
              onClick={() => {
                SetNav(!nav);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>

            <div className="header_links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <button className="header_button" type="button">
              Request Invite
            </button>
          </nav>

          <div className="nav_menu has-fade fade-out">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;
