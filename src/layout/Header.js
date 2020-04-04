import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand" style={{ color: "black" }}>
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "black" }}>
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-link"
                style={{ color: "black" }}
              >
                <i className="fas fa-users" /> Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: "black" }}>
                <i className="fas fa-question" /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" style={{ color: "black" }}>
                <i className="fas fa-user" /> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
