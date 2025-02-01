import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="name">
        <h1>blitz</h1>
        <p>COURSE</p>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="creator" smooth={true} duration={500}>
              Curators{" "}
            </Link>
          </li>
          <li>
            <Link to="program" smooth={true} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="locations" smooth={true} duration={500}>
              Location
            </Link>
          </li>
        </ul>
        <Link className="book" to="contact" smooth={true} duration={500}>
          Book a Place
        </Link>
      </nav>
    </header>
  );
};

export default Header;
