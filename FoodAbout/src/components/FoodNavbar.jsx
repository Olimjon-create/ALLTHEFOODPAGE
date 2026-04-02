import React from "react";
import { NavLink } from "react-router-dom";
import "./FoodNav.css";

const FoodNavbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FastFood</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/foods" className="nav-item">
            Foods
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" className="nav-item">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </li>
      </ul>

      <div className="right-section">
        <input
          type="text"
          placeholder="Search food..."
          className="search-input"
        />

        <NavLink to="/login">
          <button className="login-btn">Login</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default FoodNavbar;
