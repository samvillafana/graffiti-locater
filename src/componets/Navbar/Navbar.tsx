import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <h2 className="navbar-brand">Graffiti Locator</h2>
      </Link>
      <div className="navbar-links">
        <Link className="navbar-link" to="/about">
          About
        </Link>
        <Link className="navbar-link" to="/contact">
          Contact Us
        </Link>
        <Link className="navbar-link" to="/testimonials">
          Testimonials
        </Link>
        <Link className="navbar-link" to="/report">
          Report Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
