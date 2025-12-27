import React from "react";
import "./FoodCard.css";

const FoodCard = ({ food }) => {
  if (!food) return null;
  return (
    <div className="food-card">
      <h2>{food.name}</h2>
      <p>Price: ${food.price}</p>
    </div>
  );
};

export default FoodCard;
