import React from "react";
import "./FoodNav.css";

const FoodNavbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FastFood</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Foods</li>
        <li>Categories</li>
        <li>About</li>
      </ul>

      <div className="right-section">
        <input
          type="text"
          placeholder="Search food..."
          className="search-input"
        />
        <a href="../components/Login">
          <button className="login-btn">Login</button>
        </a>
      </div>
    </nav>
  );
};

export default FoodNavbar;
