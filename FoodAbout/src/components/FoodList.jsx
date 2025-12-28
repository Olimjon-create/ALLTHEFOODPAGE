import React, { useCallback, useEffect, useState } from "react";
import { getFoods } from "../services/foodService";
import FoodCard from "./FoodCard";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await getFoods();
        if (Array.isArray(data)) {
          setFoods(data);
        } else {
          console.error("Expected array but got:", data);
        }
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };
    fetchFoods();
  }, []);

  if (!foods || foods.length === 0) {
    return <p>Loading foods...</p>;
  }
  useCallback(() => {
    first;
  }, [second]);

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        padding: "1rem",
      }}
    >
      {foods.map((food) => (
        <FoodCard key={food?.id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
