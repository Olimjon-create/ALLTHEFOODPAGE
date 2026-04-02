import React from "react";
import "./Foods.css";

const Foods = () => {
  return (
    <div className="foods-page">
      <h1>Our Foods</h1>
      <p>Choose your favorite food and enjoy!</p>

      <div className="foods-list">
        <div className="food-card">🍔 Burger</div>
        <div className="food-card">🍕 Pizza</div>
        <div className="food-card">🌮 Taco</div>
        <div className="food-card">🍗 Chicken</div>
      </div>
    </div>
  );
};

export default Foods;
